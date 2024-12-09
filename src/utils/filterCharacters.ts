import { Character, CharacterFilters } from '../types';

export function filterCharacters(
  characters: Character[],
  filters: CharacterFilters
) {
  return characters.filter((character) => {
    const { name, status, species } = filters;

    let isValid = true;

    if (name && !character.name.toLowerCase().includes(name.toLowerCase())) {
      isValid = false;
    }

    if (status && character.status.toLowerCase() !== status.toLowerCase()) {
      isValid = false;
    }

    if (species && character.species.toLowerCase() !== species.toLowerCase()) {
      isValid = false;
    }

    return isValid;
  });
}
