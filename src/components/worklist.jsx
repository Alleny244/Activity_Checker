import React, { Component } from "react";
import { useContext } from "react";
import { WorkContext } from "../contexts.jsx/work";

const Worklist = () => {
  const { books, addBook, deleteBooks } = useContext(WorkContext);
  return books.length ? (
    <ol>
      {books.map((book) => {
        return (
          <li className="lis" key={book.id}>
            {" "}
            {book.do}
            <button
              className="su"
              onClick={() => {
                deleteBooks(book.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  ) : (
    <div className="cv">Woah !!! Add Your Works</div>
  );
};

export default Worklist;
