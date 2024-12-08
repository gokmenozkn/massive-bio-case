import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Character, CharacterFilters } from '../types';

interface CharacterState {
  selectedCharacter: Character | null;
  filters: CharacterFilters;
  currentPage: number;
  pageSize: number;
}

type CharacterAction =
  | { type: 'SET_SELECTED_CHARACTER'; payload: Character | null }
  | { type: 'SET_FILTERS'; payload: CharacterFilters }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_PAGE_SIZE'; payload: number };

const initialState: CharacterState = {
  selectedCharacter: null,
  filters: {},
  currentPage: 1,
  pageSize: 20,
};

const characterReducer = (
  state: CharacterState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case 'SET_SELECTED_CHARACTER':
      return { ...state, selectedCharacter: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload, currentPage: 1 };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.payload, currentPage: 1 };
    default:
      return state;
  }
};

const CharacterContext = createContext<
  | {
      state: CharacterState;
      dispatch: React.Dispatch<CharacterAction>;
    }
  | undefined
>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      'useCharacterContext must be used within CharacterProvider'
    );
  }
  return context;
};
