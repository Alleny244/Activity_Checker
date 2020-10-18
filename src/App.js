import React from "react";
import Form from "./components/form";
import NavBar from "./components/navBar";
import WorkList from "./components/worklist";
import WorkContextProvider from "./contexts.jsx/work";

function App() {
  return (
    <div className="App">
      <WorkContextProvider>
        <NavBar />
        <WorkList />
        <Form />
      </WorkContextProvider>
    </div>
  );
}

export default App;
