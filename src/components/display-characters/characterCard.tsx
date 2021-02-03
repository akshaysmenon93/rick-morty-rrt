import React from 'react';
import {Character} from '../../redux/actions';

interface CharacterCardProps {
	character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
	return (
		<div className='card mb-4 mt-4'>
			<img
				src={character.image}
				className='card-img-top img-fluid'
				alt='character'
			/>
			<div className='card-body'>
				<h5 className='card-title'>{character.name}</h5>
				<div className='card-text'>
					<ul>
						<li>
							<label className='character-traits-label'>Species </label>:{' '}
							{character.species ? character.species : 'Unknown'}
						</li>
						<li>
							<label className='character-traits-label'>Type </label>:{' '}
							{character.type ? character.type : 'Unknown'}
						</li>
						<li>
							<label className='character-traits-label'>Gender </label> :{' '}
							{character.gender ? character.gender : 'Unknown'}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
