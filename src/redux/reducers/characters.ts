import {Character, Action, ActionTypes} from '../actions';

//state is initialised with an empty array
export const characterReducer = (state: Character[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchCharacters:
			return action.payload;
		case ActionTypes.addCharacter:
			return [...state, {...action.payload}];
		default:
			return state;
	}
};
