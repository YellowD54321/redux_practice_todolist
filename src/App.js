import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodoInput from "./Components/features/todos/TodoInput";
import TodoList from "./Components/features/todos/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
