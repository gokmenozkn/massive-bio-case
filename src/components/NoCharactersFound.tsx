import React from 'react';

interface Props {
  message: string;
}

export const NoCharactersFound: React.FC<Props> = ({ message }) => {
  return (
    <tr>
      <td colSpan={5} className='text-center p-4 text-gray-500'>
        {message}
      </td>
    </tr>
  );
};
