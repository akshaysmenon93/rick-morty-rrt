import axios from 'axios';

import {Dispatch} from 'redux';

import {Action, ActionTypes} from './types';

export interface CharacterLocation {
	name: string;
	url: string;
}

export interface CharacterOrigin extends CharacterLocation {}

export interface CharactersResponse {
	info: {
		count: number;
		pages: number;
		next: string;
		previous: string;
	};
	results: {
		id: number;
		name: string;
		status: string;
		species: string;
		type: string;
		gender: string;
		origin?: CharacterLocation;
		location?: CharacterOrigin;
		image: string;
		episode?: string[];
		url?: string;
		created: Date;
	}[];
}

export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin?: CharacterLocation;
	location?: CharacterOrigin;
	image: string;
	episode?: string[];
	url?: string;
	created: Date;
}

export interface FetchCharactersAction {
	type: ActionTypes.fetchCharacters;
	payload: Character[];
}

export interface AddCharacterAction {
	type: ActionTypes.addCharacter;
	payload: Character; //needs to be changed
}

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get<CharactersResponse>(baseUrl);

			dispatch<FetchCharactersAction>({
				type: ActionTypes.fetchCharacters,
				payload: response.data.results,
			});
		} catch (error) {
			alert('Oops something went wrong back there !' + error);
		}
	};
};

export const addCharacter = (character: Character): Action => {
	return {
		type: ActionTypes.addCharacter,
		payload: character,
	};
};
