import { CharacterList } from './components/CharacterList';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      
      <main className='p-4'>
        <CharacterList />
      </main>
    </>
  );
}

export default App;
