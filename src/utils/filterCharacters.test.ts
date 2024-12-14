import { describe, it, expect } from 'vitest';
import { filterCharacters } from './filterCharacters';
import { Character, CharacterFilters } from '../types';

const mockCharacters: Character[] = [
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
    status: 'Dead',
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

describe('filterCharacters', () => {
  it('should return all characters if no filters are provided', () => {
    const filters: CharacterFilters = {};
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(mockCharacters.length);
    expect(result).toEqual(mockCharacters);
  });

  it('should filter characters by name', () => {
    const filters: CharacterFilters = { name: 'Rick' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Rick Sanchez');
  });

  it('should filter characters by status', () => {
    const filters: CharacterFilters = { status: 'Dead' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe('Dead');
  });

  it('should filter characters by species', () => {
    const filters: CharacterFilters = { species: 'Human' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(2);
    expect(result.every((char) => char.species === 'Human')).toBe(true);
  });

  it('should apply multiple filters (name and status)', () => {
    const filters: CharacterFilters = { name: 'Rick', status: 'Alive' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Rick Sanchez');
    expect(result[0].status).toBe('Alive');
  });

  it('should return an empty array if no characters match the filters', () => {
    const filters: CharacterFilters = { name: 'Unknown', status: 'Dead' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(0);
  });

  it('should perform case-insensitive filtering', () => {
    const filters: CharacterFilters = { name: 'rIcK', species: 'huMaN' };
    const result = filterCharacters(mockCharacters, filters);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Rick Sanchez');
    expect(result[0].species).toBe('Human');
  });
});
