import axios from 'axios';

export async function fetchCharacter() {
  const url = 'https://rickandmortyapi.com/api/character';
  const ids = Array.from({ length: 300 }, (_, index) => index + 1);
  const response = await axios.get(`${url}/${ids.join(',')}`);

  return response.data;
}
