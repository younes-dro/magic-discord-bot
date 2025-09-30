// app/bot/messageHandler.js
const globals = require('./globals');
const { getCustomCommandsForUserByServerId } = require('./db/customCommands'); // Import the function
const customCommandHandler = require('./customCommandHandler');

module.exports = (client) => {
  // The 'ready' event has already been handled in client.js, so no need to handle it here

  // Listen for the 'messageCreate' event
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    const userMessage = message.content.toLowerCase();

    if (message.guild) {
      const serverId = message.guild.id;

      if (!globals.getServerIds().includes(serverId)) {
        globals.addServerId(serverId);
      }


      // Fetch custom commands for the user based on the server ID
      const customCommands = await getCustomCommandsForUserByServerId(serverId);
      // console.log('Custom commands for user:', customCommands);
      // console.log( 'user message' , userMessage)
      if (customCommands.length > 0) {
        customCommandHandler.handleCustomCommands(userMessage, customCommands, message);
      }
    }

  });
};
