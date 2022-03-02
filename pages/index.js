// import Head from 'next/head'
// import Image from 'next/image'
import Header from '../components/base/Header';
import SectionA from '../components/section/SectionA';
import SectionB from '../components/section/SectionB';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <SectionA />
        <SectionB />
      </main>
    </div>
  );
}
