import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import NewRequest from './pages/newRequest/NewRequest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='newRequest' element={<NewRequest />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
