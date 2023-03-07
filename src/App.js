import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

// BEM conventions use block element modifier

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
