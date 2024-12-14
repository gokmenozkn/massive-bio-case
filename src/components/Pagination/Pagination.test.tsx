import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { Pagination } from './index';
import { CharacterProvider } from '../../context/CharacterContext';
import '@testing-library/jest-dom/vitest';

describe('Pagination', () => {
  afterEach(() => {
    cleanup();
  });

  it('should disable the buttons when no characters are provided', () => {
    render(
      <CharacterProvider>
        <Pagination totalPages={5} dataLength={0} />
      </CharacterProvider>
    )

    const prevBtn = screen.queryByTestId('prevBtn');
    const nextBtn = screen.queryByTestId('nextBtn');

    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeDisabled();
  })

  it('should render the correct initial page number', () => {
    render(
      <CharacterProvider>
        <Pagination totalPages={5} dataLength={5} />
      </CharacterProvider>
    );
    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  it('should disable the Previous button on the first page', () => {
    render(
      <CharacterProvider>
        <Pagination totalPages={5} dataLength={5} />
      </CharacterProvider>
    );

    const prevButton = screen.queryAllByTestId('prevBtn')[0];
    expect(prevButton).toBeDisabled();
  });
});
