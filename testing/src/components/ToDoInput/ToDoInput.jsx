import { useState } from "react";

const ToDoInput = (props) => {
  let { input, changeInput, saveToDo } = props;
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-6 ">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo"
              value={input}
              onChange={changeInput}
            />
            <button
              className="input-group-text btn btn-primary"
              onClick={saveToDo}
            >
              Save
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default ToDoInput;
