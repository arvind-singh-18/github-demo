import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Landing Head</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
