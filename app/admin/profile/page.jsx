'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './styles.module.scss';
import UnsavedChangesBar from '../../components/unsavedchangesbar/UnsavedChangesBar';

function ProfilePage() {
  const { data: sessionData, status } = useSession();
  
  console.log(sessionData)

  const initialNameValue = sessionData?.user?.name || ''; 
  const initialEmailValue =  sessionData?.user?.email || ''; 

  const [nameValue, setNameValue] = useState(initialNameValue);
  const [emailValue, setEmailValue] = useState(initialEmailValue);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [saving, setSaving] = useState(false);

  

  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setNameValue(newValue);
    setUnsavedChanges(newValue !== initialNameValue || emailValue !== initialEmailValue);
  };

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmailValue(newValue);
    setUnsavedChanges(nameValue !== initialNameValue || newValue !== initialEmailValue);
  };

  const handleResetChanges = () => {
    setNameValue(initialNameValue);
    setEmailValue(initialEmailValue);
    setUnsavedChanges(false);
  };

  useEffect(() => {

    if (status === 'authenticated') {
      setNameValue(initialNameValue);
      setEmailValue(initialEmailValue);
      setUnsavedChanges(false);
    }
  }, [initialNameValue, initialEmailValue]);

  const handleSaveChanges = async () => {
    setSaving(true);

    const data = {
      name: nameValue,
      email: emailValue,
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
    <div className={styles.container}>
      {/* <pre>{JSON.stringify(sessionData)}</pre> */}
      <label className={styles.inputLabel}>
        Name:
        <input
          type="text"
          value={nameValue}
          onChange={handleNameChange}
          className={styles.inputField}
        />
      </label>
      <br />
      <label className={styles.inputLabel}>
        Email:
        <input
          type="text"
          value={emailValue}
          onChange={handleEmailChange}
          className={styles.inputField}
        />
      </label>
      <br />
      <UnsavedChangesBar
        unsavedChanges={unsavedChanges}
        onSave={handleSaveChanges}
        onReset={handleResetChanges}
        saving={saving}
        styles={styles}
      />
    </div>
  );
}

export default ProfilePage;
