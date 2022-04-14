import logo from "./paulavallemonograma.png";
import "./App.css";
import Dictionary from "./dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
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
          </small>
        </footer>
      </div>
    </div>
  );
}
