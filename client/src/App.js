import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Header from './components/header';
import MoviePage from './pages/moviepage';
import PageNotFound from './pages/pageNotFound';
import SearchPage from './pages/searchpage';
import Footer from './components/footer';




function App() {


  return (


    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={
              <>
               <Homepage/>
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

          <Route
            path="/movie"
            element={
              <>
              <PageNotFound/>
              
              </>
            }
          ></Route>

          <Route
            path="/movie/:movidId"
            element={
              <>
              <Navbar/><MoviePage/>
              
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <>
              <Navbar/><SearchPage/><Footer/>
              
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
              <PageNotFound/>
              
              </>
            }
          ></Route>
          


      </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
