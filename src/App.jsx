
import { ApplicationProvider } from './contexts/Application';

import { AppRoutes } from './router.jsx';

function App() {

  return (
    <div>
      <ApplicationProvider>
        <AppRoutes />
      </ApplicationProvider>
    </div>
  )
}

export default App
