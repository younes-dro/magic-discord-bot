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

async function getCustomCommandsForUserByServerId(serverId) {
  try {
    const userId = await getUserIdFromServerId(serverId);

    if (userId) {
      const customCommands = await prisma.CustomCommnad.findMany({
        where: {
          userId: userId,
        },
        select: {
          customCommand: true,
        },
      });

      // Extract and return the custom commands
      return customCommands.map((command) => command.customCommand);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error retrieving custom commands for user by server ID:', error);
    return [];
  }
}

module.exports = {
  getUserIdFromServerId,
  getCustomCommandsForUserByServerId
};
