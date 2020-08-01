import React from "react";
import Home from "./pages/Home";
import "./App.css";
import AppProvider from "./store/context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
