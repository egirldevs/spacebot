# NASA APOD Twitter Bot

This is a Node.js application that tweets out NASA's Astronomy Picture of the Day (APOD) every 24 hours using the Twitter API.

## Prerequisites

To use this application, you will need the following:

- Node.js installed on your computer
- A Twitter developer account with access tokens and keys
- An API key for NASA's APOD

## Installation

1. Clone the repository to your local machine.
2. Install the dependencies by running `yarn install`.
3. Replace the placeholders in the Twit configuration with your own Twitter access tokens and keys.
4. Replace the APIKEYHERE placeholder in the APOD URL with your own API key.
5. Start the application by running `yarn start`.

## Usage

This application uses the `node-cron` package to schedule the tweet to be posted every 24 hours at midnight. The code block that sets up the cron job is shown below:

```js
cron.schedule('0 0 * * *', function() {
  // code for getting and posting the APOD goes here
});
```

## Reason on why I did this

Eh I got bored and decided to make this bot for my partner because we both like NASA's APOD


Feel free to make PR's and contribute just make sure the code isn't bad! <3 

~ Emily
