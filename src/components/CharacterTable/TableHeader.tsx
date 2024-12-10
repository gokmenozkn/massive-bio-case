import React from 'react';
import { useCharacterContext } from '../../context/CharacterContext';

export const TableHeader: React.FC = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <thead className='bg-gray-50 sticky top-0'>
      <tr>
        <th className='p-2 border text-left font-medium text-gray-500'>
          Image
        </th>
        <th
          onClick={() => dispatch({ type: 'TOGGLE_SORT_ORDER' })}
          className='p-2 border text-left font-medium text-gray-500 hover:text-gray-600 cursor-pointer'
        >
          Name {state.sortOrder === 'asc' ? '▲' : '▼'}
        </th>
        <th className='p-2 border text-left font-medium text-gray-500'>
          Status
        </th>
        <th className='p-2 border text-left font-medium text-gray-500'>
          Species
        </th>
        <th className='p-2 border text-left font-medium text-gray-500'>
          Location
        </th>
      </tr>
    </thead>
  );
};
