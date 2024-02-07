'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.css'
const ClientComponent = dynamic(() => import('../components/ClientComponent'), {
  ssr: false
});

const IndexPage: React.FC = () => {
  return (
    <div className={styles.pagina}>
      <h1>Index Page</h1>
      <ClientComponent />
    </div>
  );
};

export default IndexPage;
