const express = require('express');
const server = express();
const MxSdk = require('machaao');
const lib = new MxSdk('<----Bot Token----->', 'dev', server);
const api = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple';
const rp = require('request-promise');
const welcome_responses = [
	'hi',
	'hello',
	'bojour',
	'namaste',
	'kia ora',
	'bula',
	'kemunacho',
	'hey',
	'yo',
	'sup',
	'whats up?',
	'wassup',
	'get_started',
	'get started',
];

server.post('/incoming', async (req, res) => {
	try {
		//get incoming messages
		const x = await lib.getUserMessages(req);

		//manage user response
		if (x.length > 0) {
			const incoming = x[0].message_data;

			switch (incoming.action_type) {
				case 'postback':
					if (welcome_responses.includes(incoming.text)) sendWelcomeMessage(req);
					else sendFallbackMessage(req);
					break;
				case 'quick_reply':
					if (welcome_responses.includes(incoming.text)) sendWelcomeMessage(req);
					else if (incoming.text === 'start') sendQuestionMessage(req);
					else checkResult(incoming, req);
					break;
				case 'get_started':
					if (welcome_responses.includes(incoming.text)) sendWelcomeMessage(req);
					else sendFallbackMessage(req);
					break;
			}
		}

		res.sendStatus(200);
	} catch (error) {
		console.error(error.stack);
		res.send(500);
	}
});
async function getQuestion() {
	const options = {
		method: 'GET',
		uri: api,
		headers: {
			'Content-Type': 'application/json',
		},
		transform: function (body, response) {
			if (typeof body === 'string') {
				response.body = JSON.parse(body);
				return response.body.results[0];
			} else return response.body.results[0];
		},
	};

	return rp(options);
}
function _getUserQuestion(payload) {
	return payload.filter((q) => q.name === 'currentQuestion');
}
async function checkResult(incoming, req) {
	const answer = await lib.getUserMessages(req);
	const userTags = await lib.getUserTags(req);
	if (userTags.length > 0) {
		const currentQ = _getUserQuestion(userTags);
		const correct_answer = currentQ[0].values[0].correct_answer;
		if (correct_answer === incoming.text) await sendCorrectAnswerMessage(req);
		else await sendWrongAnswerMessage(req, correct_answer);
	}
}

async function sendWelcomeMessage(req) {
	return lib.sendButtonsOrQuickRepliesMessage(
		req,
		"Hi I'm TriviaBot, here to entertain you with multi choice Trivia Questions! Click Start to begin!",
		[],
		[{ title: 'Start', content_type: 'text', payload: 'start' }] // sample quick reply
	);
}

async function sendCorrectAnswerMessage(req) {
	return lib.sendButtonsOrQuickRepliesMessage(
		req,
		'Correct Answer!',
		[],
		[{ title: 'Next Question', content_type: 'text', payload: 'start' }] // sample quick reply
	);
}

async function sendWrongAnswerMessage(req, correct_answer) {
	return lib.sendButtonsOrQuickRepliesMessage(
		req,
		`Sorry, the right answer is ${correct_answer}.`,
		[],
		[{ title: 'Next Question', content_type: 'text', payload: 'start' }] // sample quick reply
	);
}

async function sendFallbackMessage(req) {
	return lib.sendButtonsOrQuickRepliesMessage(
		req,
		"I'm not sure I understand, to begin the quiz, tap Start below!",
		[],
		[{ title: 'Start', content_type: 'text', payload: 'start' }] // sample quick reply
	);
}

async function sendQuestionMessage(req) {
	try {
		//generate question
		//set user tag
		//send question

		const q = await getQuestion();
		const response = await lib.addUserTag('currentQuestion', [q], req);
		let answers = [...q.incorrect_answers, q.correct_answer];
		answers = answers.sort((a, b) => {
			return 0.5 - Math.random();
		});
		const qrs = [];
		answers.map((a) => {
			qrs.push({ title: a, content_type: 'text', payload: a });
		});
		return lib.sendButtonsOrQuickRepliesMessage(req, q.question, [], qrs);
	} catch (error) {
		console.error(error.stack);
	}
}
const p = process.env.PORT || 3000;
server.listen(p, () => {
	console.log(`Listening on port ${p}`);
});
