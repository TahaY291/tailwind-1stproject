import { useState } from 'react';
import './App.css';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(darkTheme);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 transition-all duration-700 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
