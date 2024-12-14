import { useCharacters } from '../api/queries';
import { useCharacterContext } from '../context/CharacterContext';
import { totalPageNum, paginatedData } from '../utils/calculatePages';
import { CharacterDetail } from './CharacterDetail';
import { CharacterTable } from './CharacterTable';
import { ErrorMessage } from './ErrorMessage';
import { FilterBar } from './FilterBar';
import { LoadingSpinner } from './LoadingSpinner';
import { Pagination } from './Pagination';
import { sortCharacters } from '../utils/sortCharacters';

export const CharacterList: React.FC = () => {
  const { state } = useCharacterContext();
  const { data, isLoading, error } = useCharacters(
    state.filters,
  );

  // İsme göre sıralama
  const sortedData = sortCharacters(data, state.sortOrder);

  // sayfa sayısı hesaplama
  const totalPages = totalPageNum(data, state.pageSize);

  // sayfa sınırı
  const startIndex = (state.currentPage - 1) * state.pageSize;
  const dataToShow = paginatedData(sortedData, startIndex, state.pageSize); // Sayfada gösterilecek veri sayısına veriyi göre sayfalara böl

  return (
    <div className='max-w-7xl mx-auto px-4'>
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
