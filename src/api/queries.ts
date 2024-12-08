import { Character, CharacterFilters } from '../types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

// export const useCharacters = (
//   page: number,
//   filters: CharacterFilters,
// ) => {
//   const queryString = Object.entries(filters)
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     .filter(([_, value]) => value)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

//   return useQuery<CharacterResponse>({
//     queryKey: ['characters', page, filters],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `https://rickandmortyapi.com/api/character/?page=${page}&${queryString}`
//       );
//       return data;
//     },
//   });
// };

export const useCharacters = (
  page: number,
  filters: CharacterFilters,
  pageSize: number
) => {
  const { name, species, status } = filters;
  const params = new URLSearchParams({
    page: page.toString(),
    count: pageSize.toString(),
  });

  if (name) params.append('name', name);
  if (species) params.append('species', species);
  if (status) params.append('status', status);

  return useQuery<CharacterResponse>({
    queryKey: ['characters', page, filters, pageSize],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?${params.toString()}`
      );
      return data;
    },
  });
};
