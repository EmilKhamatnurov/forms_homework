import { CSSProperties, FunctionComponent, useMemo } from 'react';
import styles from './Input.module.scss';

interface InputProps {
	name: string;
	value?: any;
	radioValue?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	label?: string;
	defaultChecked?: boolean;
	placeholder?: string;
	description?: string;
	error?: string;
	radius?: number;
	size?: number;
	disabled?: boolean;
	withAsterisk?: boolean;
	icon?: string;
	prefix?: string; // Добавляем новое поле для фиксированного символа
}

const Input: FunctionComponent<InputProps> = props => {
	const {
		name,
		value,
		radioValue,
		onChange,
		type,
		label,
		defaultChecked = false,
		placeholder,
		description,
		error,
		radius,
		size = 16,
		disabled,
		withAsterisk,
		icon = null,
	} = props;

	const inputStyles = useMemo<CSSProperties>(() => {
		return {
			...(radius ? { borderRadius: `${radius}px` } : {}),
			...(size ? { fontSize: `${size}px` } : {}),
			...(type === 'radio' ? { flexDirection: 'row' } : {}),
		};
	}, [radius, size, type]);

	const inputFieldStyles = useMemo<CSSProperties>(() => {
		return {
			...(icon ? { paddingLeft: `${size + 3}px` } : {}),
		};
	}, [icon, size]);

	const iconValue = useMemo(() => {
		return typeof icon === 'string' ? icon.slice(0, 1) : '';
	}, [icon]);

	const inputValue = useMemo(() => {
		if (type === 'radio') {
			return radioValue;
		} else {
			return value;
		}
	}, [radioValue, type, value]);

	return (
		<label style={inputStyles} className={styles['inputLabel']}>
			<div className={styles['inputLabelWrapper']}>
				<p>{label}</p>
				<div className={styles['inputAsterisk']}>{withAsterisk && '*'}</div>
			</div>
			{description && (
				<span className={styles['inputDescription']}>{description}</span>
			)}

			{/* Обертка для input и префикса */}
			<div className={styles['inputWrapper']}>
				{iconValue && <span className={styles['inputIcon']}>{iconValue}</span>}
				<input
					name={name}
					value={inputValue}
					onChange={onChange}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					defaultChecked={defaultChecked}
					className={styles['inputField']}
					style={inputFieldStyles}
				/>
			</div>

			{error && <span className={styles['inputError']}>{error}</span>}
		</label>
	);
};

export default Input;
