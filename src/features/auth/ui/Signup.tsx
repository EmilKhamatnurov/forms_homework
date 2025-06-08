import { FunctionComponent, useCallback, useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import styles from './styles/Auth.module.scss';

interface SingupProps {
	onSubmit: (value: object) => void;
}

interface InputsType {
	username: string;
	nickname: string;
	password: string;
	confirm_password: string;
	email: string;
	gender: string;
}

const Singup: FunctionComponent<SingupProps> = props => {
	const { onSubmit } = props;
	// States
	const [value, setValue] = useState<InputsType>({
		username: '',
		nickname: '',
		password: '',
		confirm_password: '',
		email: '',
		gender: 'Male',
	});

	const handleValueChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
		},
		[]
	);

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const formElements = event.target as HTMLFormElement;
		const formDataObject: InputsType = {
			username: formElements.username.value,
			nickname: formElements.nickname.value,
			password: formElements.password.value,
			confirm_password: formElements.confirm_password.value,
			email: formElements.email.value,
			gender: formElements.gender.value,
		};

		if (Object.values(formDataObject).includes('')) {
			alert('Все поля должны быть заполнены');
			console.log(Object.values(formDataObject));

			return;
		}

		if (formDataObject?.password !== formDataObject.confirm_password) {
			alert('Пароли должны совпадать');
			return;
		}

		onSubmit(formDataObject);
	};

	return (
		<form className={styles['form']} onSubmit={handleSubmit}>
			<Input
				withAsterisk={true}
				name='username'
				type='text'
				value={value.username}
				onChange={handleValueChange}
				label='Name'
				radius={5}
				size={20}
				description='Имя пользователя'
			/>
			<Input
				withAsterisk={true}
				name='nickname'
				type='text'
				value={value.nickname}
				onChange={handleValueChange}
				label='Nickname'
				radius={5}
				size={20}
				description='Ник'
				icon='@'
			/>
			<Input
				withAsterisk={true}
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
				withAsterisk={true}
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
				withAsterisk={true}
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
