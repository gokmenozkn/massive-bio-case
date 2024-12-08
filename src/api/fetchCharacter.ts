import axios from 'axios';

export async function fetchCharacter(ids: number[]) {
  const url = 'https://rickandmortyapi.com/api/character';
  const response = await axios.get(`${url}/${ids.join(',')}`);

  return response.data;
}
