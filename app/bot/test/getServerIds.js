// test/getServerIds.js
const fs = require('fs');
const path = require('path');

// Adjust the path to directly point to serverIds.json in app/bot/data
const SERVER_IDS_FILE = path.join(__dirname, '..', 'data', 'test', 'serverIds.json');

function readServerIds() {
  try {
    const data = fs.readFileSync(SERVER_IDS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading serverIds.json:', error);
    return [];
  }
}

// Define a function that retrieves the server IDs
const getServerIds = () => {
  return readServerIds();
};

module.exports = getServerIds;
