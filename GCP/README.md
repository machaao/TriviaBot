This tutorial is for Deploying this bot on GCP App Engine.


### Before you begin

Download and Insall [Google Cloud SDK](https://cloud.google.com/sdk/docs)

```bash
# If you already have the Cloud SDK installed, update it by running the following command
gcloud components update

# Create a new project:
gcloud projects create [YOUR_PROJECT_ID] --set-as-default

# Verify the project was created:
gcloud projects describe [YOUR_PROJECT_ID]

# Initialize your App Engine app with your project and choose its region:
gcloud app create --project=[YOUR_PROJECT_ID]
```

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

### Deploying on GCP
```bash
# Deploying the NodeJS app on App Engine
gcloud app deploy

# Opening the deployed project
gcloud app browse
```
If everything went well, Your app will be live.
