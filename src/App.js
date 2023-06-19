import "./App.css";
import Counter from "./components/Counter";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
      <h1>useReducer Practice File</h1>
      <Counter />
      <hr></hr>
      <br></br>
      <TodoApp />
    </div>
  );
}

export default App;
