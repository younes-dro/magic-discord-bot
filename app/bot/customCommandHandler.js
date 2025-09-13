const membershipPlansModule = require('./wordpress-api/membershipPlans');

function handleCustomCommands(userMessage, customCommands, message) {
    // Check if the user message starts with "!"
    if (userMessage.startsWith('!')) {
      const commandName = userMessage.substring(1); // Remove the "!" at the beginning
      for (const commandObject of customCommands) {
        for (const [key, value] of Object.entries(commandObject)) {
          if (value === commandName) {
            switch (key) {
              case 'getAllMemberhips':
                membershipPlansModule.fetchMembershipPlansAndSendEmbed(message)
                break;
              case 'getHelp':
                message.reply("What can i help you ?")
                break;
              default:
                //console.log('None');
                break;
            }

            return;
          
          }
        }
      }
      // If the loop completes without finding a match, reply with a default message
      message.reply('Command not found.');
    }
  }
  
  
  module.exports = {
    handleCustomCommands,
  };
  