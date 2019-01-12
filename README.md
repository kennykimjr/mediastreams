# mediastreams
A Web app that displays Twitter Tweets matching a hashtag in real time.

# Demo

![demo](https://user-images.githubusercontent.com/26865352/51078873-48ccaf00-1671-11e9-86d1-5ac01b5c2c5d.gif)

A Link to a working Demonstration can also be viewed [here](https://kennykimjr-mediastreams.herokuapp.com/).

# Features
* Searchable hashtag input.
* View tweets coming in real time, updated every 3 seconds.

# Dependencies
All packages that are required are shipped with the repository as detailed in the package.json file. However, the main underlying technologies that will be necessary to be able to run the app:
 1. NodeJs
 2. Node Package Manager (NPM, should ship with the above.)

# Instructions
To run this locally....

    git clone https://github.com/kennykimjr/mediastreams.git
    cd mediastreams
    touch .env (Inside this file, write TWITTER_KEY=YOURKEY (Replace Twitter Key with an access token, or ask me for mine), PORT=3000)
    npm install
    npm run local

# Regarding TWITTER_KEY
The Twitter API has guidelines on how to use the API. In order to use it, you must first create a twitter account with developer access, and then register a developer application under your account. Once you have done that, grab your application's client secret and key and [generate an access token](https://developer.twitter.com/en/docs/basics/authentication/guides/bearer-tokens). Once you have done that, apply that access token to your environment variable TWITTER_KEY


This opens up the localhost at port 3000, or just http://localhost:3000.
