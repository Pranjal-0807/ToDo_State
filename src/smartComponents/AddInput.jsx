import React from "react";
import { Check } from "lucide-react";
import Button from "../components/Button";
import ColorDropdown from "../components/ColorDropdown";

const AddInput = ({ todo, setTodo }) => {
  console.log(todo);
  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div className="mx-28 size-3/4 px-4 py-2">
        <div>
          {todo.map((todo, index) => (
            <div className="flex justify-between border-b-2" key={index}>
              <div className="flex items-center">
                <Button
                  btnText={
                    todo.isChecked === true ? (
                      <Check className="w-4 h-4 text-green-600 font-bold" />
                    ) : null
                  }
                  cssClass={`w-6 h-6 rounded-full border-2 flex items-center justify-center`}
                />
                <p className="py-4 ml-2">{todo.name}</p>
              </div>

              <div className="flex items-center">
                <ColorDropdown />
                <div
                  className="ml-2 cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  ❌
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddInput;
