import {FetchCharactersAction, AddCharacterAction} from './characters';

export enum ActionTypes {
	fetchCharacters,
	addCharacter,
}

export type Action = FetchCharactersAction | AddCharacterAction;
