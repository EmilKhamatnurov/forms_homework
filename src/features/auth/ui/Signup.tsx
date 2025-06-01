import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import styles from './styles/Auth.module.scss';

interface SingupProps {
	handleSubmit?: (value: object) => void;
}

const Singup: FunctionComponent<SingupProps> = props => {
	const { handleSubmit } = props;
	// States
	const [value, setValue] = useState({
		name: '',
		nickname: '',
		password: '',
		confirm_password: '',
		email: '',
		gender: 'Male',
	});

	useEffect(() => {
		console.log('####value', value);
	}, [value]);

	const handleValueChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
		},
		[]
	);

	return (
		<form className={styles['form']} onSubmit={handleSubmit}>
			<Input
				name='name'
				type='text'
				value={value.name}
				onChange={handleValueChange}
				label='Name'
				radius={5}
				size={20}
				description='Имя пользователя'
			/>
			<Input
				name='nickname'
				type='text'
				value={value.nickname}
				onChange={handleValueChange}
				label='Nickname'
				radius={5}
				size={20}
				description='Ник'
			/>
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
			<div style={{ display: 'flex', gap: '20px' }}>
				<Input
					name='gender'
					type='radio'
					defaultChecked={true}
					radioValue='Male'
					onChange={handleValueChange}
					label='Male'
				/>
				<Input
					name='gender'
					type='radio'
					radioValue='Female'
					onChange={handleValueChange}
					label='Female'
				/>
			</div>

			<Input
				name='password'
				type='password'
				value={value.password}
				onChange={handleValueChange}
				label='Password'
				radius={5}
				size={20}
				description='Пароль'
			/>

			<Input
				name='confirm_password'
				type='password'
				value={value.confirm_password}
				onChange={handleValueChange}
				label='Confirm password'
				radius={5}
				size={20}
				description='Повторите пароль'
				// error='Пароли должны совпадать!'
			/>
			<button type='submit' className={styles['formButton']}>
				Зарегистрироваться
			</button>
		</form>
	);
};

export default Singup;
