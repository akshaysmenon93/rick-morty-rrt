import {Character} from '../../redux/actions';

export function validateForm(character: Character) {
	let errors: {[k: string]: any} = {};

	if (character.name.length === 0) {
		errors.name = 'Please enter your character name';
	}

	if (character.type.length === 0) {
		errors.type = 'Please enter your character type';
	}

	return errors;
}
