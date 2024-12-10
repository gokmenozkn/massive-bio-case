import { Character, CharacterFilters } from '../types';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacter } from './fetchCharacter';
import { filterCharacters } from '../utils/filterCharacters';

export const useCharacters = (
  page: number,
  filters: CharacterFilters,
  pageSize: number
) => {
  const { data, error, isLoading } = useQuery<Character[]>({
    queryKey: ['character', page, pageSize],
    queryFn: fetchCharacter,
  });

  const filteredData = data ? filterCharacters(data, filters) : [];

  return { data: filteredData, error, isLoading };
};
