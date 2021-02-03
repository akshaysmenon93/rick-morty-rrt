import React from 'react';
import {NavLink} from 'react-router-dom';
import {Character} from '../../redux/actions';
import RadioInput from '../common/radioInput';

import TextInput from '../common/textInput';

interface AddCharacterFormProps {
	newCharacter: Character;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errors: {[k: string]: any};
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const AddCharacterForm: React.FC<AddCharacterFormProps> = ({
	newCharacter,
	onChange,
	errors,
	onSubmit,
}) => {
	return (
		<div className='character-form'>
			<NavLink to='/' className='back'>
				<svg
					width='1em'
					height='1em'
					viewBox='0 0 16 16'
					className='bi bi-arrow-left'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
					/>
				</svg>
				Back
			</NavLink>

			<form onSubmit={onSubmit}>
				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<TextInput
							name='name'
							label='Character Name'
							placeholder='Enter your character name'
							value={newCharacter.name}
							onChange={onChange}
							error={errors.name}
						/>
					</div>

					<div className='col-md-6 col-sm-12'>
						<RadioInput
							id='CharStatus'
							name='status'
							label='Status'
							option1='Alive'
							option2='Dead'
							option3='Unknown'
							selectedValue={newCharacter.status}
							onChange={onChange}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<TextInput
							name='type'
							label='Character Type'
							placeholder='Enter your character type'
							value={newCharacter.type}
							onChange={onChange}
							error={errors.type}
						/>
					</div>

					<div className='col-md-6 col-sm-12'>
						<RadioInput
							id='CharSpecies'
							name='species'
							label='Species'
							option1='Human'
							option2='Alien'
							option3='Unknown'
							selectedValue={newCharacter.species}
							onChange={onChange}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<RadioInput
							id='CharGender'
							name='gender'
							label='Gender'
							option1='Male'
							option2='Female'
							option3='Other'
							selectedValue={newCharacter.gender}
							onChange={onChange}
						/>
					</div>
				</div>

				<div className='control'>
					<button type='submit' className='btn button-primary'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddCharacterForm;
