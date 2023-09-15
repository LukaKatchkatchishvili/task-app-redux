import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/taskSlice";

const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      const newTask = {
        id: Math.random(),
        title: inputValue,
        isChecked: false,
      };
      dispatch(add(newTask));
      setInputValue("");
      inputRef.current.focus();
    }
  };

  return (
    <form className="flex justify-center ">
      <input
        type="text"
        name="inputTask"
        id="inputTask"
        placeholder="New Todo"
        className="border w-96 pl-3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <button
        className="border md:px-4 py-2 bg-slate-100 hover:bg-slate-200 transition-all p-2"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </form>
  );
};

export default Input;
