import {Character} from '../../redux/actions';

export function validateCommentForm(character: Character) {
	let errors: {[k: string]: any} = {};

	if (character.name.length === 0) {
		errors.name = 'Please enter your character name';
	}

	if (character.type.length === 0) {
		errors.type = 'Please enter your comment';
	}

	return errors;
}
