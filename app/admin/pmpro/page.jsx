'use client'
import CommandInfo from '@/app/components/dashboard/commandinfo/CommandInfo';
import { commandList }  from '../../components/dashboard/commandinfo/data';
import React, { useState, useEffect } from 'react';
import UnsavedChangesBar from '../../components/unsavedchangesbar/UnsavedChangesBar';


const Page = () => {

  const initialPrefixValue = 'asher_';
  // console.log(commandList)
  const [prefix, setPrefix] = useState('');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  

  const handlePrefixChange = (event) => {
    const newValue = event.target.value;
    setPrefix(event.target.value);
    setUnsavedChanges(newValue !== initialPrefixValue);
    
  };

  const handleResetChanges = () => {
    setPrefix(initialPrefixValue);
    setUnsavedChanges(false);
  };

  useEffect(() => {
    setPrefix(initialPrefixValue)
      setUnsavedChanges(false);
    
  }, [initialPrefixValue]);

  const handleSaveChanges = async () => {
    setSaving(true);

    const data = {
      prefix: prefix,
    };

    try {
      // Simulate an AJAX request with a delay (replace with actual AJAX request)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Data successfully saved:', data);
      setUnsavedChanges(false);
      setSaving(false); // Reset saving status after successful save
    } catch (error) {
      console.error('Error saving data:', error);
      setSaving(false); // Reset saving status on error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Paid Memberships Pro Commands</h1>
      
      <div className="mb-4">
        <label className="block font-semibold">Prefix Command:</label>
        <input
        type="text"
        placeholder='asher_'
        className="border rounded p-2 w-full text-gray-50 bg-black" // Adjust text and background color here
        value={prefix}
        onChange={handlePrefixChange} />
          <p className="mt-1 text-gray-400 text-sm">
            Define a prefix that will be added to all commands, like asher_.
            </p>

      </div>
      
      <div className="grid gap-4">
        {commandList.map((command, index) => (
          <CommandInfo key={index} title={command.title} description={command.description} />
        ))}
      </div>
      <UnsavedChangesBar
        unsavedChanges={unsavedChanges}
        onSave={handleSaveChanges}
        onReset={handleResetChanges}
        saving={saving}
        
      />
    </div>
    
  );
};

export default Page;