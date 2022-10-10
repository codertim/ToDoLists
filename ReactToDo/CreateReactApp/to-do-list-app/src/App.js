import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-headerDELETED">
        <h1>React To Do List</h1>
      </header>
      
      <ToDoList headervalue="My Do Do List"><div>Hello There!</div></ToDoList>

      <div id="react-marketing" class="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
          >
          Learn React 123
        </a>
      </div>
    </div>
  );
}

export default App;
