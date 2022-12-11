import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import About from './Pages/About/About';
import ConnectUs from './Pages/ConnectUs/ConnectUs';
import ReadingHistory from './Pages/ReadingHistory/ReadingHistory';
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
          <Route path='/' element={<Tutorials />} />
          <Route path='/about' element={<About />} />
          <Route path='/connect_us' element={<ConnectUs />} />
          <Route path='/reading_history' element={<ReadingHistory/>} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
