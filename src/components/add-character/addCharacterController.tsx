import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {addCharacter, Character} from '../../redux/actions';
import {validateForm} from '../common/formValidator';
import AddCharacterForm from './addCharacterForm';

interface AddCharacterControllerProps {
	addCharacter: Function;
}

const _AddCharacterController: React.FC<AddCharacterControllerProps> = ({
	addCharacter,
}) => {
	const [character, setCharacter] = useState<Character>({
		id: Math.floor(Math.random() * 100),
		name: '',
		status: 'Alive',
		species: 'Human',
		type: '',
		gender: 'Female',
		image: 'https://picsum.photos/200',
		created: new Date(),
	});

	const [errors, setErrors] = useState<any>({});
	const history = useHistory();

	const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		setCharacter((previousState) => ({
			...previousState,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const _errors = validateForm(character);
		setErrors(_errors);

		if (Object.keys(_errors).length > 0) {
			return;
		}

		addCharacter(character);
		history.push('/');
	};

	return (
		<div className='character-form-container'>
			<AddCharacterForm
				newCharacter={character}
				errors={errors}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export const AddCharacterController = connect(null, {addCharacter})(
	_AddCharacterController,
);
