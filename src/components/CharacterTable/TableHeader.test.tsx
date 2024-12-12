import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { CharacterProvider } from '../../context/CharacterContext';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  it('should render all table header columns correctly', () => {
    render(
      <CharacterProvider>
        <table>
          <TableHeader />
        </table>
      </CharacterProvider>
    );

    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Name ▲')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Species')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });
});
