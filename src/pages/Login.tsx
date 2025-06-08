import { FunctionComponent, useCallback, useState } from 'react';

import Singin from '../features/auth/ui/Signin';
import Singup from '../features/auth/ui/Signup';
import { LOGIN_TABS } from './data/constants';
import styles from './styles/Login.module.scss';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
	const [currentTab, setCurrentTab] = useState<string>('Войти');

	const handleTabClick = (e: React.MouseEvent<HTMLDivElement>) => {
		setCurrentTab(e.currentTarget.dataset['tab'] ?? LOGIN_TABS[0]);
	};

	const handleSubmitRegister = useCallback((inputs: object) => {
		console.log('inputs', inputs);
	}, []);

	const handleSubmitLogin = useCallback((inputs: object) => {
		console.log('inputs', inputs);
	}, []);

	return (
		<div className={styles['loginPage']}>
			<div className={styles['tabsWrapper']}>
				{LOGIN_TABS.map((tabName: string, index: number) => (
					<div
						key={`${tabName}_${index}`}
						data-tab={tabName}
						onClick={handleTabClick}
						className={styles[currentTab === tabName ? 'currentTab' : 'tab']}
					>
						{tabName}
					</div>
				))}
			</div>
			{currentTab === 'Войти' && <Singin handleSubmit={handleSubmitLogin} />}
			{currentTab === 'Зарегистрироваться' && (
				<Singup onSubmit={handleSubmitRegister} />
			)}
		</div>
	);
};

export default Login;
