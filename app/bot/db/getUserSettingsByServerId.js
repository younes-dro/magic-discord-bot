// customCommands.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserIdFromServerId(serverId) {
  try {
    const server = await prisma.Server.findFirst({
      where: {
        serverId: serverId,
      },
      //   select: {
      //     userId: true,
      //   },
    });

    if (server) {
      return server.userId;
    } else {
      return null; // Server not found, return null
    }
  } catch (error) {
    console.error('Error retrieving user ID from server ID:', error);
    return null;
  }
}

async function getSettingsForUserByServerId(serverId) {
  try {
    const userId = await getUserIdFromServerId(serverId);

    if (userId) {
      const apisettings = await prisma.apiSettings.findFirst({
        where: {
          userId: userId,
        }
      });

      return apisettings.settings

    } else {
      return [];
    }
  } catch (error) {
    console.error('Error retrieving Settings for user by server ID:', error);
    return [];
  }
}

module.exports = {
  getUserIdFromServerId,
  getSettingsForUserByServerId
};
