import React from 'react';
import { Character } from '../types';

interface CharacterDetailProps {
  character: Character | null;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
}) => {
  if (!character) return null;

  return (
    <div className='mt-8 p-4 border rounded'>
      <div className='flex gap-8'>
        <img
          src={character.image}
          alt={character.name}
          className='w-48 h-48 rounded'
        />
        <div>
          <h2 className='text-2xl font-bold mb-4'>{character.name}</h2>
          <p>
            <strong>Status: </strong>
            <span data-testid='status'>{character.status}</span>
          </p>
          <p>
            <strong>Species: </strong>
            <span data-testid='species'>{character.species}</span>
          </p>
          <p>
            <strong>Gender: </strong>
            <span data-testid='gender'>{character.gender}</span>
          </p>
          <p>
            <strong>Origin: </strong>
            <span data-testid='origin'>{character.origin.name}</span>
          </p>
          <p>
            <strong>Location: </strong>
            <span data-testid='location'>{character.location.name}</span>
          </p>
          <p>
            <strong>Number of Episodes: </strong>
            <span data-testid='episode'>{character.episode.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
