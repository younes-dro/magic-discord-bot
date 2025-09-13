'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import DiscordConnectButton from '../../components/dashboard/connect-user-discord/DiscordConnectButton';
import axios from 'axios';
import { toast } from "react-hot-toast"
import CustomLoaderSpinner from '@/app/components/dashboard/customloaderspinner/CustomLoaderSpinner';

const Page = () => {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [serverId, setServerId] = useState('');
  const [userId, setUserID] = useState('');

  useEffect(() => {
    if (session?.userID) {
      setUserID(session.userID);
    }
  }, [session]);

  const handleServerIdChange = (event) => {
    setServerId(event.target.value);
  };

  useEffect( () => {
    async function fetchData() {
      if (session?.userID) {
        setLoading(true)
        await fetch(`/api/get-user-discord-server-id/${session.userID}`)
          .then((res) => res.json())
          .then((data) => {
            setServerId(data.serverId)
          })
          .finally( () =>{
            setLoading(false)
          })
        }
    }
    fetchData();

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      serverId,
    };
    setLoading(true)
    axios.post('/api/save-user-discord-server-id', data)
      .then(() => toast.success('Server ID has been registered!'))
      .finally(() =>{ setLoading(false)})
      .catch(() => toast.error('Something went wrong!'))
    // setServerId('');
  };

  return (
<>
    {loading ? (
      <CustomLoaderSpinner />
    ): (
      <div className="flex flex-col h-screen">
      <h1 className="text-4xl font-bold mb-4">Add Discord Bot to server</h1>
      <DiscordConnectButton clientId={clientId} />

      <h1 className="text-4xl font-bold mb-4">Add Server ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={serverId}
          onChange={handleServerIdChange}
          placeholder="Enter Server ID"
          className="px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>

    )}
</>
  );
};

export default Page;
