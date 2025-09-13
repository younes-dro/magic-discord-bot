// app/bot/index.js
const { BOT_TOKEN } = require('./config');
const { client } = require('./client');
const messageHandler = require('./messageHandler');

// Start the bot
startBot();

async function startBot() {
  try {
    await client.login(BOT_TOKEN);
    console.log('Bot logged in.');

    // Call the message handler and pass the client instance
    messageHandler(client);
  } catch (error) {
    console.error('Failed to log in:', error);
  }
}
