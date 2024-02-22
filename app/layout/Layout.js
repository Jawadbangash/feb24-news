import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <main className={styles.content}>{children}</main>
    {/* Add sidebar or additional components here */}
  </div>
);

export default Layout;
