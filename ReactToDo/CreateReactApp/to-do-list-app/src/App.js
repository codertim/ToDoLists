import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  var myStyle = {
    color: 'red'
  };

  return (
    <div className="App">
      <header className="App-headerDELETED">
        <h1>
          {
          // React To Do List
          }
        </h1>
      </header>

      <ToDoList headervalue="My To Do List"><div>Hello There!</div></ToDoList>

      <div id="react-marketing" class="App-footer" style={myStyle}>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
          >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
