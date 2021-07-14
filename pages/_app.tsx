import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';
import { JssProvider, createGenerateId } from 'react-jss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { useEffect } from 'react';

import '../styles/globals.scss';

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: process.env.cognito_REGION,
		userPoolId: process.env.cognito_USER_POOL_ID,
		identityPoolId: process.env.cognito_IDENTITY_POOL_ID,
		userPoolWebClientId: process.env.cognito_APP_CLIENT_ID,
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.getElementById('mantine-ssr-styles');
		if (jssStyles) {
			jssStyles?.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<JssProvider generateId={createGenerateId({ minify: true })}>
					<Head>
						<title>NextJS Template</title>
						<meta
							name='viewport'
							content='minimum-scale=1, initial-scale=1, width=device-width'
						/>
					</Head>
					<MantineProvider
						theme={{
							/** Put your mantine theme override here */
							colorScheme: 'light',
						}}
					>
						<NormalizeCSS />
						<GlobalStyles />
						<Component {...pageProps} />
					</MantineProvider>
				</JssProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
