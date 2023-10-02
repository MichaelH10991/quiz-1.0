#!/bin/bash
timestamp=$(date)
export REACT_APP_TIMESTAMP=$timestamp

BUCKET="s3://language-quiz-1.0/"

# build the app
npm install
npm run build

# deploy
aws --profile mike s3 cp build/ $BUCKET --recursive