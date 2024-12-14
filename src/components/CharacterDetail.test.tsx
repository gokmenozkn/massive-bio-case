import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { CharacterDetail } from './CharacterDetail';
import { Character } from '../types';
import '@testing-library/jest-dom/vitest';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Citadel of Ricks', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: '',
  created: '',
};

describe('CharacterDetail', () => {
  it('should render null when character is null', () => {
    const { container } = render(<CharacterDetail character={null} />);

    expect(container.firstChild).toBeNull();
  });

  it('should render character details when character is provided', () => {
    render(<CharacterDetail character={mockCharacter} />);

    // Karakter bilgilerini kontrol et
    expect(
      screen.getByRole('img', { name: /Rick Sanchez/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Rick Sanchez/)).toBeInTheDocument();
    expect(screen.getByTestId('status').textContent).toBe('Alive');
    expect(screen.getByTestId('species').textContent).toBe('Human');
    expect(screen.getByTestId('gender').textContent).toBe('Male');
    expect(screen.getByTestId('origin').textContent).toBe('Earth');
    expect(screen.getByTestId('location').textContent).toBe('Citadel of Ricks');
    expect(screen.getByTestId('episode').textContent).toBe('1');
  });
});
