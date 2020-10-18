import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { v1 as uuid } from "uuid";

export const WorkContext = createContext();

const WorkContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const addBook = (work) => {
    setBooks([...books, { do: work, id: uuid() }]);
  };
  const deleteBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  useEffect(() => {
    const details = localStorage.getItem("works");
    if (details) {
      setBooks(JSON.parse(details));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("works", JSON.stringify(books));
  });
  return (
    <WorkContext.Provider value={{ books, addBook, deleteBooks }}>
      {props.children}
    </WorkContext.Provider>
  );
};

export default WorkContextProvider;
