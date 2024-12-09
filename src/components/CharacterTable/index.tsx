import React from 'react';
import { Character } from '../../types';
import { useCharacterContext } from '../../context/CharacterContext';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';

export const CharacterTable: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  const { dispatch } = useCharacterContext();

  return (
    <div className='overflow-auto max-h-96 border rounded-lg'>
      <table className='min-w-full divide-y divide-gray-200'>
        <TableHeader />

        <tbody className='divide-y divide-gray-200'>
          {characters.map((character) => (
            <TableRow
              key={character.id}
              character={character}
              onClick={() =>
                dispatch({
                  type: 'SET_SELECTED_CHARACTER',
                  payload: character,
                })
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
