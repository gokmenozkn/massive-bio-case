import { Character } from '../types';

export function sortCharacters(
  characters: Character[],
  sortOrder: 'asc' | 'desc'
) {
  return characters.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
}
