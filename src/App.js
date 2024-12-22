import React from "react";
import Heading from "./components/Heading";
import Input from "./pages/Input";
import Footer from "./smartComponents/Footer";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="min-h-screen flex flex-col">
      <Heading />
      <div className="flex flex-col flex-grow my-5 border shadow p-3 mx-80">
        <Input todo={todo} setTodo={setTodo} />
        <div className="mt-auto">
          <Footer todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
