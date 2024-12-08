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
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
          <p>
            <strong>Number of Episodes:</strong> {character.episode.length}
          </p>
        </div>
      </div>
    </div>
  );
};
