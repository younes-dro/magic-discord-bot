
const { Client, EmbedBuilder, GatewayIntentBits, Partials, Events } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [ Partials.Message, Partials.Channel, Partials.Reaction ],
});

client.on('ready', (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});


module.exports = {
  client,
};
