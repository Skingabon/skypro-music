// import logo from './logo.svg';
import './App.css';

const todos = {
  todos: [
    {
    text: "посмотреть новый урок",
    id: 15,
    created_at: "2023-07-05T15:14:15.080Z",
    user: null,

  },
  {
    text: "сдать домашку",
    id: 16,
    created_at: "2023-08-05T15:14:15.049Z",
    user: null,

  },
  {
    text: "попрактиковаться",
    id: 17,
    created_at: "2023-09-05T15:14:15.117Z",
    user: null,

  },
  {
    text: "отдохнуть",
    id: 18,
    created_at: "2023-10-05T15:14:15.333Z",
    user: null,

  },
 ],
};

function App() {

  console.log("App exec");

  const addTodo = () => {
    alert("clicked")
  };

  return (
    <>
    <ul>
      {todos.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <input />
    <button onClick={addTodo}>Добавить</button>
    </>
  );
}

export default App;
