import {combineReducers} from 'redux';
import {Character} from '../actions';
import {characterReducer} from './characters';

export interface StoreState {
	characters: Character[];
}

export const reducers = combineReducers<StoreState>({
	characters: characterReducer,
});
