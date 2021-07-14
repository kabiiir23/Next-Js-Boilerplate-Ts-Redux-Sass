import User from '@components/Features/User Components/User';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import AppLayout from '../layouts/AppLayout';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<AppLayout pageTitle='Markopolo.ai' description='Markopolo.ai'>
			<div className={styles.container}>
				<main className={styles.main}>
					<img src='/kabiiir23.svg' alt='kabiiir23' width='80px' />
					<ButtonPrimary onClick={() => {}}>
						<a
							href='https://github.com/kabiiir23'
							target='_blank'
							rel='noopener noreferrer'
						>
							Github
						</a>
					</ButtonPrimary>
					<User />
				</main>
			</div>
		</AppLayout>
	);
}
