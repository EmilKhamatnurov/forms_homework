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
		icon,
	} = props;

	const inputStyles = useMemo<CSSProperties>(() => {
		return {
			...(radius ? { borderRadius: `${radius}px` } : {}),
			...(size ? { fontSize: `${size}px` } : {}),
			...(type === 'radio' ? { flexDirection: 'row' } : {}),
		};
	}, [radius, size, type]);

	const inputValue = useMemo(() => {
		if (type === 'radio') {
			return radioValue;
		} else {
			return value;
		}
	}, [radioValue, type, value]);

	const inputIcon = useMemo(() => {
		if (icon) {
			return (
				<div
					style={{ width: `${size}px`, height: `${size}px` }}
					className={styles['inputIcon']}
				>
					{icon}
				</div>
			);
		}
	}, [icon, size]);

	return (
		<label style={inputStyles} className={styles['inputLabel']}>
			<div className={styles['inputLabelWrapper']}>
				<p>{label}</p>
				<div className={styles['inputAsterisk']}>{withAsterisk && '*'}</div>
			</div>
			{description && (
				<span className={styles['inputDescription']}>{description}</span>
			)}
			<input
				name={name}
				value={inputValue}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				defaultChecked={defaultChecked}
				className={styles['inputField']}
			/>
			{inputIcon}
			{error && <span className={styles['inputError']}>{error}</span>}
		</label>
	);
};

export default Input;
