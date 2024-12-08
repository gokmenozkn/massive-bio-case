import React from 'react';

interface FilterInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div className='flex flex-col'>
    <label className='mb-1 text-sm font-medium'>{label}</label>
    <input
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className='p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
    />
  </div>
);
