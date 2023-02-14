import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './contexts/ThemeContext'
//watch last 30min on importing theme context

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Homepage />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
