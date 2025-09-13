// test/index.js
const getServerIds = require('./getServerIds');

// Define an async function to wait for server IDs
const logServerIds = async () => {
  // Wait for a short delay (adjust as needed) to ensure the server IDs are populated
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Call the function to retrieve server IDs
  const serverIds = getServerIds();
  console.log('Server IDs:', serverIds);
};

// Call the async function to log server IDs
logServerIds();
