//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeContextProvider from './contexts/ThemeContext';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Signup from './pages/Users/Signup';
import Signin from './pages/Users/Signin';
import UserContextProvider from './contexts/UserContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
      <ThemeContextProvider>
        <Header />

        <Routes>
          <Route path="/" element= {<Homepage />} />
          <Route path="/signin" element= {<Signin />} />
          <Route path="/signup" element= {<Signup />} />
          <Route path="/moviedetails/:movieId" element= {<MovieDetails />} />
        </Routes>
        
        <Footer />
      </ThemeContextProvider>
      </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
