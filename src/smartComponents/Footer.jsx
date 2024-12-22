import React from "react";
import Button from "../components/Button";
import ParagraphFooter from "../components/ParagraphFooter";
import ColorFilterOption from "../components/ColorFilterOption";
import { colorArray } from "../utils/colorArray";

const Footer = ({ todo, setTodo }) => {
  const handleMarkAllCompleted = () => {
    setTodo(todo.map((todo) => ({ ...todo, isChecked: true })));
  };

  const handleClearCompleted = () => {
    setTodo(todo.filter((todo) => !todo.isChecked));
  };

  return (
    <>
      <div className="border-t-4"></div>
      <div className="flex justify-between">
        <div>
          <ParagraphFooter paraText="Actions" />
          <Button
            btnText="Mark All Completed"
            handleClick={handleMarkAllCompleted}
          />
          <br />
          <Button
            btnText="Clear Completed"
            handleClick={handleClearCompleted}
          />
        </div>

        <div>
          <ParagraphFooter paraText="Remaining Todos" />
          <p className="text-center">{todo.length} item left</p>
        </div>

        <div>
          <ParagraphFooter paraText="Filter by Status" />
          <div className="text-center">
            <Button btnText="All" />
            <br />
            <Button btnText="Active" />
            <br />
            <Button btnText="Completed" />
          </div>
        </div>

        <div>
          <ParagraphFooter paraText="Filter by Color" />
          <div className="space-y-3">
            {colorArray.map((color) => (
              <ColorFilterOption color={color} key={color} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
