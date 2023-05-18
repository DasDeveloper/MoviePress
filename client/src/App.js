import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Header from './components/header';

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
        
        <Route
            path="/signin"
            element={
              <>
              <Header/><Signin/>
              </>
            }
          ></Route>

          <Route
            path="/signup"
            element={
              <>
              <Header/><Signup/>
              </>
            }
          ></Route>


      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
