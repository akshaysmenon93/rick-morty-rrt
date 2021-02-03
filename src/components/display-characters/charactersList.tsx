import React from 'react';

import {Character} from '../../redux/actions';
import CharacterCard from './characterCard';

import {NavLink} from 'react-router-dom';

interface CharacterListProps {
	characters: Character[];
}

const CharactersList: React.FC<CharacterListProps> = ({characters}) => {
	return (
		<>
			<div className='list-header'>
				<button className='btn button-primary button-primary-add'>
					<NavLink to='/add'>Add Character</NavLink>
				</button>
			</div>

			<div className='character-list'>
				{characters.map((character) => (
					<CharacterCard character={character} key={character.id} />
				))}
			</div>
		</>
	);
};

export default CharactersList;
