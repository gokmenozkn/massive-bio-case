import React from 'react';

export const TableHeader: React.FC = () => (
  <thead className='bg-gray-50'>
    <tr>
      <th className='p-2 border text-left font-medium text-gray-500'>Image</th>
      <th className='p-2 border text-left font-medium text-gray-500'>Name</th>
      <th className='p-2 border text-left font-medium text-gray-500'>Status</th>
      <th className='p-2 border text-left font-medium text-gray-500'>Species</th>
      <th className='p-2 border text-left font-medium text-gray-500'>Location</th>
    </tr>
  </thead>
);
