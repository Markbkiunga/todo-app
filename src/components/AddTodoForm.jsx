/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";
import { baseURL, fetchData } from "../FetchData";

const AddTodoForm = () => {
  const [newTodoItem, setNewTodoItem] = useState("");

  function handleChange(e) {
    setNewTodoItem(e.target.value);
  }

  function addTodoItem(event) {
    const todo = {
      title: newTodoItem,
      completed: false,
    };
    event.preventDefault();
    fetchData(baseURL, "POST", todo);

    setNewTodoItem("");
  }

  return (
    <form onSubmit={addTodoItem}>
      <InputField value={newTodoItem} onChange={handleChange} />
      <PrimaryButton>Add Todo</PrimaryButton>
    </form>
  );
};

export default AddTodoForm;
