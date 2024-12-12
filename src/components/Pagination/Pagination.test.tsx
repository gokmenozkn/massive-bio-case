import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from './index';
import { CharacterProvider } from '../../context/CharacterContext';
import '@testing-library/jest-dom/vitest';

describe('Pagination', () => {
  it('should render the correct initial page number', () => {
    render(
      <CharacterProvider>
        <Pagination totalPages={5} />
      </CharacterProvider>
    );
    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  it('should disable the Previous button on the first page', () => {
    render(
      <CharacterProvider>
        <Pagination totalPages={5} />
      </CharacterProvider>
    );
    
    const prevButton = screen.queryAllByTestId('prevBtn')[0];
    expect(prevButton).toBeDisabled();
  });
});
