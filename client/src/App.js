import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ProjHome from './pages/Home/ProjHome';
import ExpHome from './pages/Home/ExpHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<ExpHome/>}/>
        <Route path='/projects' element={<ProjHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
