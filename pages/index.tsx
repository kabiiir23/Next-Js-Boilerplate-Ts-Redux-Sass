import Head from 'next/head';
import Link from 'next/link';
import ButtonPrimary from '../components/ButtonPrimary';
import AppLayout from '../layouts/AppLayout';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <AppLayout pageTitle='Markopolo.ai' description='Markopolo.ai'>
      <div className={styles.container}>
        <main className={styles.main}>
          <img src='/kabiiir23.svg' alt='kabiiir23' />
          <ButtonPrimary onClick={() => {}}>
            <a
              href='https://github.com/kabiiir23'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </ButtonPrimary>
        </main>
      </div>
    </AppLayout>
  );
}
