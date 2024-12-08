import React from 'react';
import { Character } from '../../types';

interface TableRowProps {
  character: Character;
  onClick: () => void;
}

export const TableRow: React.FC<TableRowProps> = ({ character, onClick }) => {
  return (
    <tr onClick={onClick} className='hover:bg-gray-50 cursor-pointer border-b'>
      <td className='p-2 border'>
        <img
          src={character.image}
          alt={character.name}
          className='w-16 h-16 rounded'
        />
      </td>
      <td className='p-2 border'>{character.name}</td>
      <td className='p-2 border'>{character.status}</td>
      <td className='p-2 border'>{character.species}</td>
      <td className='p-2 border'>{character.location.name}</td>
    </tr>
  );
};
