import React from 'react';
import { useCharacterContext } from '../../context/CharacterContext';
import { CharacterFilters } from '../../types';
import { FilterInput } from './FilterInput';

export const FilterBar: React.FC = () => {
  const { state, dispatch } = useCharacterContext();

  const handleFilterChange = (key: keyof CharacterFilters, value: string) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { ...state.filters, [key]: value },
    });
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_PAGE_SIZE', payload: Number(e.target.value) });
  };

  return (
    <div className='flex gap-4 mb-6 flex-wrap'>
      <FilterInput
        label='Name'
        value={state.filters.name || ''}
        onChange={(value) => handleFilterChange('name', value)}
        placeholder='Search by name'
      />

      {/* <FilterInput
        label='Status'
        value={state.filters.status || ''}
        onChange={(value) => handleFilterChange('status', value)}
        placeholder='alive, dead, or unknown'
      /> */}
      {/* Change Status */}
      <select
        className='p-2 border rounded'
        onChange={(e) =>
          dispatch({
            type: 'SET_FILTERS',
            payload: { ...state.filters, status: e.target.value },
          })
        }
      >
        <option value=''>All status</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>

      <FilterInput
        label='Species'
        value={state.filters.species || ''}
        onChange={(value) => handleFilterChange('species', value)}
        placeholder='Enter species'
      />

      {/* Page size selection */}
      <div className='flex flex-col'>
        <label htmlFor='pageSize' className='mb-1 text-sm font-medium'>
          Page Size:
        </label>
        <select
          className='p-2 border rounded'
          value={state.pageSize}
          onChange={handlePageSizeChange}
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};
