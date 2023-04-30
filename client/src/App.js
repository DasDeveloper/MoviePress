import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={
              <>
                <Navbar/><Homepage/><Footer/>
              </>
            }
          ></Route>


      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
