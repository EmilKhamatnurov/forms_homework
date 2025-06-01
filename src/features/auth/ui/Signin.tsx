import { FunctionComponent, useCallback, useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import styles from './styles/Auth.module.scss';

interface SinginProps {
	handleSubmit?: (value: object) => void;
}

const Singin: FunctionComponent<SinginProps> = props => {
	const { handleSubmit } = props;
	// States
	const [value, setValue] = useState({
		email: '',
		password: '',
	});

	const handleValueChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
		},
		[]
	);

	return (
		<form className={styles['form']} onSubmit={handleSubmit}>
			<Input
				name='email'
				type='email'
				value={value.email}
				onChange={handleValueChange}
				label='Email'
				radius={5}
				size={20}
				description='Введите логин'
			/>
			<Input
				name='password'
				type='password'
				value={value.password}
				onChange={handleValueChange}
				label='Password'
				radius={5}
				size={20}
				description='Введите пароль'
			/>
			<button type='submit' className={styles['formButton']}>
				Войти
			</button>
		</form>
	);
};

export default Singin;
