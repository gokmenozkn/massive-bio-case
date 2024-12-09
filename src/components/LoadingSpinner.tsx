import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className='flex justify-center items-center p-8'>
    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
  </div>
);