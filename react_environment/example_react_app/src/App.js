import logo from './logo.svg';
import './App.css';

function RenderName(){
  let name = "Chris";
  return(
    <div>
        {name}
    </div>
  );
}

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my Name: <RenderName />!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <h1>This is outside the container</h1>
    </>
  );
}



export default App;
