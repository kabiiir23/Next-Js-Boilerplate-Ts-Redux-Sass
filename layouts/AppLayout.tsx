import Head from 'next/head';
import MediaQuery from 'react-responsive';
import React from 'react';
//import Navbar from '../components/Navbar';

import styles from './AppLayout.module.scss';

const AppLayout = ({ children, pageTitle, description }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{pageTitle}</title>
      </Head>
      <MediaQuery minWidth='500px'>{children}</MediaQuery>
      <MediaQuery maxWidth='499px'>{children}</MediaQuery>
    </>
  );
};
export default AppLayout;
