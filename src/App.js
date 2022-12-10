import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import ConnectUs from './Pages/ConnectUs/ConnectUs';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from "./Pages/Shared/Header/Header";
import Tutorials from './Pages/Tutorials/Tutorials';
import store from './Redux/Store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/about' element={<About />} />
          <Route path='/connect_us' element={<ConnectUs />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
