import React from 'react';
import styles from './UnsavedChangesBar.module.css';

function UnsavedChangesBar  ({ unsavedChanges, onSave, onReset, saving }) {

    // console.log(saving)
  return (
    <div className={`${styles.bottomBar} ${unsavedChanges ? styles.visible : ''}`}>
      <button onClick={onSave} className={styles.saveButton}>
        {saving ? 'Saving...' : 'Save changes'}
      </button>
      <button onClick={onReset} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
};

export default UnsavedChangesBar;
