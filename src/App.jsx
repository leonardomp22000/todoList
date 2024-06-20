import { useState } from "react";

export default function App() {
  // Lista de todos
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    setTodos([
      ...todos,
      text, // Se crea una copia del arreglo y se estan poniendo en un nuevo arreglo donde se esta creando y se le añade el nuevo elemento que esta en text
    ]);
  }
  function removeTodo(indexToRemove) {
   // todos.splice(indexToRemove, 1);
   // setTodos([...todos]);
   const newTodos = todos.filter((todo, idx) => idx != indexToRemove) // Se genera una copia del arreglo de los elementos cuyo indice es diferente al que se va a eliminar
   setTodos(newTodos)
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo();
    setText("");
  }

  return (
    <main className="w-full min-h-screen flex-col ">
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={onSubmit}
      >
        <input
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          name="todo"
          type="text"
          placeholder="Ingresa una tarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button className="bg-white text-black px-3 rounded">+ Agregar</button>
      </form>
      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && (
          <p className=" text-white/50 ">No tienes tareas pendientes 🔩</p>
        )}
        {todos.map((todo, idx) => {
          return (
            <div
              key={`todo-${idx}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between "
            >
              <span className="select-none">{todo}</span>
              <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex" onClick={() => removeTodo(idx)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
