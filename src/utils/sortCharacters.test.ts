import { describe, it, expect } from 'vitest';
import { sortCharacters } from './sortCharacters';
import { Character } from '../types';

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
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: '',
    created: '',
  },
  {
    id: 3,
    name: 'Birdperson',
    status: 'Dead',
    species: 'Bird-Person',
    type: '',
    gender: 'Male',
    origin: { name: 'Bird World', url: '' },
    location: { name: 'Bird World', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: '',
    created: '',
  },
];

describe('sortCharacters', () => {
  it('should sort characters in ascending order by name', () => {
    const result = sortCharacters([...mockCharacters], 'asc');

    expect(result).toHaveLength(mockCharacters.length);
    expect(result[0].name).toBe('Birdperson');
    expect(result[1].name).toBe('Morty Smith');
    expect(result[2].name).toBe('Rick Sanchez');
  });

  it('should sort characters in descending order by name', () => {
    const result = sortCharacters([...mockCharacters], 'desc');

    expect(result).toHaveLength(mockCharacters.length);
    expect(result[0].name).toBe('Rick Sanchez');
    expect(result[1].name).toBe('Morty Smith');
    expect(result[2].name).toBe('Birdperson');
  });

  it('should not modify the original array', () => {
    const originalCharacters = [...mockCharacters];
    sortCharacters([...mockCharacters], 'asc');

    expect(mockCharacters).toEqual(originalCharacters);
  });

  it('should handle an empty array without errors', () => {
    const result = sortCharacters([], 'asc');

    expect(result).toEqual([]);
  });

  it('should handle an array with one character', () => {
    const singleCharacter = [mockCharacters[0]];
    const result = sortCharacters(singleCharacter, 'asc');

    expect(result).toEqual(singleCharacter);
  });
});
