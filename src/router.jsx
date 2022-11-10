import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studev/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}