import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (

    <div>
      <Navbar />
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
