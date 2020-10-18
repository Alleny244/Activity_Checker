import React, { Component } from "react";
import { useContext } from "react";
import { WorkContext } from "../contexts.jsx/work";
const NavBar = () => {
  const { books } = useContext(WorkContext);
  return (
    <nav id="bg">
      <div>
        <div className="do">
          <span>To-Do-List</span>
        </div>
        <div className="in">
          <span>Remaining Tasks : {books.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
