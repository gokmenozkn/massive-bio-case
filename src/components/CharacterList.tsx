import { useCharacters } from '../api/queries';
import { useCharacterContext } from '../context/CharacterContext';
import { totalPageNum, paginatedData } from '../utils/calculatePages';
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

  // sayfa sayısı hesaplama
  const totalPages = totalPageNum(data, state.pageSize);

  // sayfa sınırı
  const startIndex = (state.currentPage - 1) * state.pageSize;
  const dataToShow = paginatedData(data, startIndex, state.pageSize);

  console.log('Paginated data:', dataToShow);

  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* <h1 className='text-3xl font-bold mb-8'>Rick and Morty Characters</h1> */}

      <FilterBar />

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error as Error} />}
      {!isLoading && !error && dataToShow && (
        <>
          <CharacterTable characters={dataToShow} />
          <Pagination totalPages={totalPages} />
          <CharacterDetail character={state.selectedCharacter} />
        </>
      )}
    </div>
  );
};
