import logo from "./paulavallemonograma.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <footer className="text-center">
          <a
            href="https://github.com/PaulaValle/dictionary-project-paula-valle"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open source
          </a>
          coded by{" "}
          <a
            href="https://www.linkedin.com/in/paula-valle-romero-a8869a184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Paula Valle
          </a>
        </footer>
      </div>
    </div>
  );
}
