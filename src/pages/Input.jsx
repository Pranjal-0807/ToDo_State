import React from "react";
import AddInput from "../smartComponents/AddInput";

const Input = ({ todo, setTodo }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      setTodo([
        ...todo,
        { name: e.target.value, isChecked: false, id: todo.length, color: "" },
      ]);
      e.target.value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="mx-28 size-3/4 px-4 py-4 border-b-2"
        onKeyPress={handleKeyPress}
      />
      <AddInput todo={todo} setTodo={setTodo} />
    </>
  );
};

export default Input;
