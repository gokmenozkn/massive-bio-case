import { useCharacters } from '../api/queries';
import { useCharacterContext } from '../context/CharacterContext';
import { CharacterDetail } from './CharacterDetail';
import { CharacterTable } from './CharacterTable';
import { ErrorMessage } from './ErrorMessage';
import { FilterBar } from './FilterBar';
import { LoadingSpinner } from './LoadingSpinner';
import { Pagination } from './Pagination';

export const CharacterList: React.FC = () => {
  const { state } = useCharacterContext();
  const { data, isLoading, error } = useCharacters(
    state.currentPage,
    state.filters,
    state.pageSize
  );

  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* <h1 className='text-3xl font-bold mb-8'>Rick and Morty Characters</h1> */}

      <FilterBar />

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error as Error} />}
      {!isLoading && !error && data && (
        <>
          <CharacterTable characters={data.results} />
          <Pagination totalPages={data.info.pages} />
          <CharacterDetail character={state.selectedCharacter} />
        </>
      )}
    </div>
  );
};
