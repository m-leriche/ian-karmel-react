import React, { useState, useRef } from 'react';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.footerContainer}`}>
      <p>Website by Michael le Riche 2024</p>
    </div>
  );
};

