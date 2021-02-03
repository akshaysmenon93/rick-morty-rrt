import React from 'react';

interface TextInputProps {
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	value: any;
	error: any;
}

const TextInput: React.FC<TextInputProps> = ({
	name,
	label,
	onChange,
	placeholder,
	value,
	error,
}) => {
	return (
		<div className='form-group'>
			<label className='character-form-label' htmlFor={name}>
				{label}
			</label>
			<div className='field'>
				<input
					type='text'
					name={name}
					className='form-control input-lg character-input'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{error && <div className='form-error'>{error}</div>}
			</div>
		</div>
	);
};

export default TextInput;
