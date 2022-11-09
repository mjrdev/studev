import Home from './pages/Home';
import { ApplicationContext } from './contexts/Application';

function App() {

  let name = 'Manoel';

  return (
    <div>
      <ApplicationContext.Provider value={{name: ''}}>
        <Home />
      </ApplicationContext.Provider>
    </div>
  )
}

export default App
