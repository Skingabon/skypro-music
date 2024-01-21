// import logo from './logo.svg';
import { useState } from 'react';
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

  // console.log("App exec");
//для текста в инпуте нужно завести состояние.
  const [value, setValue] = useState('');

  const addTodo = () => {
    alert(value)
  };

  return (
    <>
    <ul>
      {todos.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    {/*  
    1. берем инпут 
    2. подписываемся на его событие onChange 
    3. когда это событие onChange происходит - берем из события текущее
     значение инпута и кладем его в состояния
    4. потом значение состояния прокидываем в value этого инпута
     Таким образом у меня в state (в состоянии) лежит то, что пользователь вводит в инпут
     */}
    <input 
    value={value} onChange={(event) => {
      setValue(event.target.value);
    }}
    />
    <button onClick={addTodo}>Добавить</button>
    </>
  );
}

export default App;
