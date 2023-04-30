const ToDoList = (props) => {
  return (
    <>
      <ul className="list-group">
        {props.toDoList.map((todo, index) => {
          return (
            <li key={index} className="list-group-item">
              {todo}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
