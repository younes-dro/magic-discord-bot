// globals.js
const fs = require('fs');
const path = require('path');

const SERVER_IDS_FILE = path.join(__dirname, 'data', 'test', 'serverIds.json');

function readServerIds() {
  try {
    const data = fs.readFileSync(SERVER_IDS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or there's an error reading it, return an empty array
    return [];
  }
}

function writeServerIds(serverIds) {
  const data = JSON.stringify(serverIds, null, 2);
  fs.writeFileSync(SERVER_IDS_FILE, data, 'utf8');
}

module.exports = {
  addServerId: (serverId) => {
    const serverIds = readServerIds();
    if (!serverIds.includes(serverId)) {
      serverIds.push(serverId);
      writeServerIds(serverIds);
    }
  },
  getServerIds: () => {
    return readServerIds();
  },
};
