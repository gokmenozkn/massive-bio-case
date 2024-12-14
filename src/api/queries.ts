import { Character, CharacterFilters } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacter } from './fetchCharacter';
import { filterCharacters } from '../utils/filterCharacters';

export const useCharacters = (filters: CharacterFilters) => {
  const { data, error, isLoading } = useQuery<Character[]>({
    queryKey: ['character'],
    queryFn: fetchCharacter,
  });

  const filteredData = data ? filterCharacters(data, filters) : [];

  return { data: filteredData, error, isLoading };
};
