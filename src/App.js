import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from "./Pages/Shared/Header/Header";
import Tutorials from './Pages/Tutorials/Tutorials';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/tutorials' element={<Tutorials/>} />
       <Route path='/about' element={<About/>} />
        </Routes>

    </div>
  );
}

export default App;
