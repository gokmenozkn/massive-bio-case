import { CharacterList } from './components/CharacterList';

function App() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-8'>Rick and Morty Characters</h1>

      <CharacterList />
    </div>
  );
}

export default App;
