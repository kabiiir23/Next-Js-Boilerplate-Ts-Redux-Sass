// @ts-nocheck
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const registry = new SheetsRegistry();
		const generateId = createGenerateId({ minify: true });
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					(
						<JssProvider registry={registry} generateId={generateId}>
							<App {...props} />
						</JssProvider>
					),
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style id='mantine-ssr-styles'>{registry.toString()}</style>
				</>
			),
		};
	}
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* Put your script tags here */}
					{/* <script
            type='text/javascript'
            async
            defer
            src=''
          ></script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
