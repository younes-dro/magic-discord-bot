import React from "react";
import styles from "./styles.module.scss";

const Plugin = (props) => {
  return (
    <div className={styles.pluginContainer}>
      <div className={styles.svgContainer}>
        {/* SVG top left */}
        {props.svg}
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.enableButton} onClick={props.onEnable}>
          Enable
        </button>
      </div>
    </div>
  );
};

export default Plugin;
