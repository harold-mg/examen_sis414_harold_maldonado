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
      <header>
        <h1>cabecera</h1>
      </header>
      <main>
        <section>
          <h2>Harold Maldonado</h2>
        </section>
        <section>
          <h2>Main</h2>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
      <ClientComponent />
    </div>
  );
};

export default IndexPage;
