'use client'
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import { toast } from "react-hot-toast"
import CustomLoaderSpinner from '@/app/components/dashboard/customloaderspinner/CustomLoaderSpinner';


const Page = () => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true);
  const [userId, setUserID] = useState('');
  const [getAuthToken, setAuthToken] = useState('');
  const [getHostName, setHostName] = useState('');

  useEffect(() => {
    if (session?.userID) {
      setUserID(session.userID);
    }
  }, [session]);

  useEffect( () => {
    async function fetchData() {
      if (session?.userID) {
        setLoading(true)
        await fetch(`/api/get-user-api-settings/${session.userID}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log('user bot command: ',  data )
            setAuthToken(data.getAuthToken)
            setHostName(data.getHostName)
            
          })
          .finally( () => {
            setLoading(false)
          })
        }
    }
    fetchData();

  }, [])

  


  const handleAuthToken = (e) => {
    setAuthToken(e.target.value);
  };

  const handleHostName = (e) => {
    setHostName(e.target.value);
  };

  

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        userId,
        getAuthToken,
        getHostName,
      };
        // console.log('form data: ',data)
      axios.post('/api/save-user-api-settings', data)
        .then(() => toast.success('API Settings has been registered!'))
        .catch(() => toast.error('Something went wrong!'))
     }
  
  

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto p-4 bg-gray-100 rounded-lg shadow-md">

      {loading ? (
        <CustomLoaderSpinner />
      ) : (

        <>
             {session?.userID && (
        <div className="mb-4">
          <h2 className="text-xl font-semibol text-black">User ID</h2>
          <input
            type="text"
            value={session.userID}
            className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
      )}

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">Auth Token</h2>
        <input
          type="text"
          value={getAuthToken}
          onChange={handleAuthToken}
          className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">Host</h2>
        <input
          type="text"
          value={getHostName}
          onChange={handleHostName}
          className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Save Form
      </button>
        </>
      )}

 
    </form>
  );
};

export default Page;
