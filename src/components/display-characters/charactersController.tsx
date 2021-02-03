import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Character, fetchCharacters} from '../../redux/actions';

import {StoreState} from '../../redux/reducers';
import CharactersList from './charactersList';

export default interface CharacterControllerProps {
	characters: Character[];
	fetchCharacters: Function;
}

const _CharactersController: React.FC<CharacterControllerProps> = ({
	characters,
	fetchCharacters,
}) => {
	useEffect(() => {
		if (characters.length === 0) {
			fetchCharacters();
		}
		// eslint-disable-next-line
	}, []);
	return <CharactersList characters={characters} />;
};

const mapStateToProps = ({
	characters,
}: StoreState): {characters: Character[]} => {
	return {
		characters,
	};
};

export const CharactersController = connect(mapStateToProps, {fetchCharacters})(
	_CharactersController,
);
