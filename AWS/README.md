This tutorial is for Deploying this bot on AWS Elastic Beanstalk.


### Before you begin

Download and Insall [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html#eb-cli3-install.scripts)

### Getting Started

```bash
# Cloning the repo
git clone https://github.com/machaao/TriviaBot

# Change to the project directory
cd TriviaBot

# Install dependencies for the project:
npm install

# Start the HTTP server:
npm start
```

### Deploying on AWS EBS
```bash
# Create a repository with the eb init command.
eb init --platform node.js --region us-east-2

# Create an environment running a sample application with the eb create command
eb create --sample trivia-bot-env

# When environment creation completes, use the eb open command to open the environment's URL in the default browser.
eb open
```

### Updating the application
```bash
# Create an .ebextensions directory in the project directory.
mkdir .ebextensions

# Add a configuration file that sets the Node Command to "npm start"
nano .ebextensions/nodecommand.config

Paste this -->
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
<--

# Stage the files
git add .
git commit -m "added ebs config"

# Deploy the changes
eb deploy
```

If everything went well, Your app will be live.
