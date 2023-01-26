import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowUsers from './components/Showusers';
import CompCreateUsers from './components/Cretaeuser';
import CompEditUser from './components/Edituser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowUsers />}/>
          <Route path='/create' element={<CompCreateUsers />} />
          <Route path='/edit/:id' element={<CompEditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
