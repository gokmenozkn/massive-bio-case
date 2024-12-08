import React from 'react';

export const ErrorMessage: React.FC<{ error: Error }> = ({ error }) => (
  <div className='p-4 bg-red-50 border border-red-200 rounded-md'>
    <p className='text-red-700'>{error.message}</p>
  </div>
);
