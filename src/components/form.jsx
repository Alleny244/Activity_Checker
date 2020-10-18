import React, { Component } from "react";
import { useState } from "react";
import { useContext } from "react";
import { WorkContext } from "../contexts.jsx/work";

const Form = () => {
  const { books, addBook, deleteBooks } = useContext(WorkContext);
  const [work, setWork] = useState("");
  const newWork = (e) => {
    e.preventDefault();
    addBook(work);
    setWork("");
  };

  return (
    <div className="for">
      <form className="g">
        <label>Tasks</label>
        <input
          value={work}
          type="text"
          required
          onChange={(e) => {
            setWork(e.target.value);
          }}
        ></input>
        <input type="submit" value="Add Work" onClick={newWork}></input>
      </form>
    </div>
  );
};

export default Form;
