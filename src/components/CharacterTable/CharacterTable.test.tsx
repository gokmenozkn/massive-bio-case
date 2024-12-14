import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { CharacterTable } from '.';
import { CharacterProvider } from '../../context/CharacterContext';
import '@testing-library/jest-dom/vitest';

const mockCharacters = [
  {
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
  },
  {
    id: 500,
    name: 'Fascist Mr. President',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Fascist Dimension)',
      url: 'https://rickandmortyapi.com/api/location/77',
    },
    location: {
      name: 'Earth (Fascist Dimension)',
      url: 'https://rickandmortyapi.com/api/location/77',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/500.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/32'],
    url: 'https://rickandmortyapi.com/api/character/500',
    created: '2020-05-02T11:25:26.903Z',
  },
];

describe('CharacterTable', () => {
  afterEach(() => {
    cleanup();
  })

  it('should display "NoCharactersFound" component when no characters are provided', () => {
    render(
      <CharacterProvider>
        <CharacterTable characters={[]} />
      </CharacterProvider>
    );

    expect(screen.getByTestId('noCharFound')).toBeInTheDocument();
  });

  it('should render TableRow components when characters are provided', () => {
    render(
      <CharacterProvider>
        <CharacterTable characters={mockCharacters} />
      </CharacterProvider>
    );

    expect(screen.queryByTestId('noCharFound')).not.toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
