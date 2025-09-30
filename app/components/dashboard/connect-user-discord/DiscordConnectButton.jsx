"use client";
import React from "react";

const DiscordConnectButton = ({ clientId }) => {
  const handleConnect = () => {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=8`;
  };

  return (
    <button
      className="px-4 py-2 w-60 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      onClick={handleConnect}
    >
      Connect to Discord
    </button>
  );
};

export default DiscordConnectButton;
