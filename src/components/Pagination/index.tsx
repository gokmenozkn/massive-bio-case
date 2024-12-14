import React from 'react';
import { useCharacterContext } from '../../context/CharacterContext';

interface PaginationProps {
  totalPages: number;
  dataLength: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  dataLength,
}) => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className='mt-6 flex items-center justify-between'>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_PAGE',
            payload: state.currentPage - 1,
          })
        }
        disabled={state.currentPage === 1 || dataLength === 0}
        className='px-4 py-2 border rounded-md bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50'
        data-testid='prevBtn'
      >
        Previous
      </button>
      <span className='text-sm text-gray-700'>
        Page {state.currentPage} of {totalPages}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_PAGE',
            payload: state.currentPage + 1,
          })
        }
        disabled={state.currentPage === totalPages || dataLength === 0}
        className='px-4 py-2 border rounded-md bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50'
        data-testid='nextBtn'
      >
        Next
      </button>
    </div>
  );
};
