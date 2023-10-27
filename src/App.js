import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Content from "./components/Content";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Landing Head</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <LandingPage />
      <Content />
      <Bottom />
    </div>
  );
}

export default App;
