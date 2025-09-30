import React from "react";

const CommandInfo = ({ title, description }) => {
  return (
    <div className="border rounded p-4 bg-black text-gray-900">
      <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-100">{description}</p>
    </div>
  );
};

export default CommandInfo;
