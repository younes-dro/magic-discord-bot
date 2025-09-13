
const { getSettingsForUserByServerId }  = require('../db/getUserSettingsByServerId')
const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

async function fetchMembershipPlansAndSendEmbed(message) {
  try {
    const serverId = message.guild.id;
    const userSettings = await getSettingsForUserByServerId(serverId); 
    
    // Check if userSettings is empty (no keys)
    if (Object.keys(userSettings).length === 0) {
        console.error('Error: userSettings is empty.');
        return; // Stop the script
      }

    const authToken = userSettings.getAuthToken;
    const host = userSettings.getHostName;
    try {
            const response = await axios.get(`${host}/wp-json/ets-connect-pmpro-discord-pro/v1/membership-levels/`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
            });
            const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('List of Membership Levels')
            .setURL('http://127.0.0.2:8000')
            .setDescription("Choose the membership that's right for you!");
      
          response.data.forEach((level) => {
            exampleEmbed.addFields({ name: `${level.name}`, value: `${level.description}` });
          });
      
          exampleEmbed
            .setImage('https://www.expresstechsoftwares.com/wp-content/uploads/cropped-Group-2-1.png')
            .setTimestamp()
            .setFooter({
              text: 'copyright ©',
              iconURL: 'https://www.expresstechsoftwares.com/wp-content/uploads/cropped-Group-2-1.png',
            });
      
          message.channel.send({ embeds: [exampleEmbed] });

        } catch ( error ){
            if (error.isAxiosError) {
                
                console.error('Axios error: Request failed with status code', error.response ? error.response.status : 'unknown');
              } else {
                // Other error (not related to Axios)
                console.error('Error:', error);
              }
              // exist
              return;

        }

    // console.log(response.data);

  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {
  fetchMembershipPlansAndSendEmbed,
};
