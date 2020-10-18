import React, { Component } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
const [Theme, setTheme] = useState({
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
});
const ThemeContextProvider = (props) => {
  return (
    <ThemeContext.Provider value={{ Theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
