import { useState } from "react";
import Header from "./components/Header/Header";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import ToDoList from "./components/ToDoList/ToDoList";
function App() {
  let [toDoList, setToDoList] = useState([]);
  let [input, setInput] = useState("");

  let changeInput = (event) => {
    setInput(event.target.value);
  };
  let saveToDo = () => {
    if (input !== "") {
      setToDoList([input, ...toDoList]);
      setInput("");
    }
  };

  return (
    <>
      <main className="container">
        <Header text="Todo" text1="Application" />
        <ToDoInput
          input={input}
          changeInput={changeInput}
          saveToDo={saveToDo}
        />
        <ToDoList toDoList={toDoList} />
      </main>
    </>
  );
}

export default App;
