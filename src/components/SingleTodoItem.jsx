/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import PageTitle from "./PageTitle";
import InputField from "./InputField";
import { baseURL, fetchData } from "../FetchData";

const SingleTodoItem = ({ todo}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  function openDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function deleteTodo() {
    fetchData(`${baseURL}/${todo.id}`, 'DELETE')
  }

  function handleChange(e) {
    setEditedTodo(e.target.value);
  }
  function editTodo(e) {
    e.preventDefault();

    const updatedTodo = {
      ...todo,
      title: editedTodo,
    };
    fetchData(`${baseURL}/${todo.id}`, 'PATCH', updatedTodo)
    setShowDialog(false);
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#685254] p-4 text-lg md:flex-row lg:items-center">
      <div className="todo-item">
        <Checkbox todo={todo} />
        <p className={todo.completed ? "completed" : ""}>{todo.title}</p>
      </div>

      <div className="flex-container">
        <PrimaryButton onClick={openDialog}>Edit</PrimaryButton>
        <DangerButton onClick={deleteTodo} text={"Delete"} />
      </div>

      {showDialog && (
        <dialog>
          <div className="flex-container">
            <PageTitle text={"Edit Todo"} />
            <DangerButton onClick={closeDialog} text={"Close"} />
          </div>

          <form onSubmit={editTodo} className="edit-todo">
            <InputField value={editedTodo} onChange={handleChange} />
            <PrimaryButton>Save</PrimaryButton>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default SingleTodoItem;
