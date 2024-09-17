// // src/TodoList.js
// import React, { useState } from "react";

// function TodoList() {
//   // State for managing the list and input
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   // Add todo item to the list
//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput(""); // Clear input field
//     }
//   };

//   // Remove todo item from the list
//   const removeTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add a new task..."
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;




import React, { useState } from "react";

function TodoList() {
  // State for managing the list and input
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(null); // Track which todo is being edited
  const [editInput, setEditInput] = useState(""); // Input for editing the todo

  // Add todo item to the list
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput(""); // Clear input field
    }
  };

  // Remove todo item from the list
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Start editing a todo
  const editTodo = (index) => {
    setIsEditing(index); // Set the currently editing todo by index
    setEditInput(todos[index]); // Set the current todo text to the edit input
  };

  // Save the edited todo
  const saveTodo = (index) => {
    const newTodos = todos.map((todo, i) => (i === index ? editInput : todo));
    setTodos(newTodos);
    setIsEditing(null); // Stop editing after saving
    setEditInput(""); // Clear the edit input field
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={() => saveTodo(index)}>Save</button>
              </>
            ) : (
              <>
                {todo} 
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

