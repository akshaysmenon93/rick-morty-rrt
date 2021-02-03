import React from 'react';

interface RadioInputProps {
	id: string;
	name: string;
	label: string;
	option1: string;
	option2: string;
	option3: string;
	selectedValue: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
	id,
	name,
	label,
	option1,
	option2,
	option3,
	selectedValue,
	onChange,
}) => {
	return (
		<div className='form-group'>
			<label className='character-form-label'>{label}</label>

			<div className='radio-group'>
				<label className='form-check-label radio-label'>
					<input
						className='radio-inline radio-feature'
						type='radio'
						name={name}
						id={id}
						value={option1}
						onChange={onChange}
						checked={selectedValue === option1}
					/>
					{option1}
				</label>
				<label className='form-check-label radio-label'>
					<input
						className='radio-inline radio-feature'
						type='radio'
						name={name}
						id={id}
						value={option2}
						onChange={onChange}
						checked={selectedValue === option2}
					/>
					{option2}
				</label>

				<label className='form-check-label radio-label'>
					<input
						className='radio-inline radio-feature'
						type='radio'
						name={name}
						id={id}
						value={option3}
						onChange={onChange}
						checked={selectedValue === option3}
					/>
					{option3}
				</label>
			</div>
		</div>
	);
};

export default RadioInput;
