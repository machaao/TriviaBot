<p align="center">
  <img src="https://www.nicepng.com/png/detail/207-2077371_bots-instagram-logo-round-blue.png" height="150" width="175" alt="Unform" />
</p>

<h3 align="center">
  TriviaBot - Chatbot for creating quizzes
</h3>

<br>

[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)  [![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Gitter](https://badges.gitter.im/messengerx-io/community.svg)](https://gitter.im/messengerx-io/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)  
<div align="center">

This repository showcases how to create a simple Trivia Bot on MessengerX.io using Open Trivia Database API and host it on Heroku. 

Visit https://blog.messengerx.io/tutorials/create-a-trivia-bot-with-node-js-and-heroku/ for more information.

<p align="center">
 <a href="#Want to Contribute? Follow the easy steps">Contribute</a> •
 <a href="#Installation">Installation</a> • 
 <a href="#Getting Started">Getting Started</a> • 
 <a href="#Deployment">Deployment</a> • 
 <a href="#Tools Used">Tools Used</a> •
 <a href="#Contributors">Contributors</a>
</p>

### **Want to Contribute? Follow the easy steps:** :busts_in_silhouette:

1. Fork this repo. - Click the fork symbol on rightmost top corner of your window.

2. Clone the forked repo. - Click the green button saying "Code" with a download button.

2. Visit https://github.com/machaao/TriviaBot/issues and comment your username. - Thereby I would be able to assign this issue to you for contribution.

3. Solve and Test your application. - You can do this in your own system with preferred editos.

4. Create a Pull Request. - After making changes, click on pull requests button that opens a window saying "Create a Pull Request". Here you complete the formalities and do it!

### Installation
```bash
git clone https://github.com/machaao/TriviaBot.git

cd TriviaBot
```
### Getting Started :computer:

1. Get Bot Token from https://portal.messengerx.io
2. Open ```index.js``` in an editor
3. Place the bot token at line 4.
```javascript
const lib = new MxSdk('<----Bot Token----->', 'dev', server);
```
4. npm install
5. Commit the repo.
```bash
git add .

git commit -m "added Bot token"
```

### Deployment :ballot_box_with_check:
Deploying it on heroku

```bash
# For Ubuntu
sudo snap install --classic heroku

# For MacOS
brew tap heroku/brew && brew install heroku

# For other OS
# Visit https://devcenter.heroku.com/articles/heroku-cli

# Log into your account
heroku login

# Create an app
heroku create

# Uploading the files
git push heroku master
```

If deployment went good, update the chatbot endpoint -> ```https://<heroku-app-name>.herokuapp.com/incoming``` on https://portal.messengerx.io.

### Tools Used :wrench:

1. [MessengerX API](https://messengerx.io)
2. [Trivia Quiz API](https://opentdb.com/api_config.php)
3. [Heroku](https://www.heroku.com/)

### Contributors
* Abhishek Raj ([abhishekraj272](https://github.com/abhishekraj272))
* Harshal Dhir ([unixguru2k](https://github.com/unixguru2k))
* Chitrang Thakkar ([chitrang89](https://github.com/chitrang89))

