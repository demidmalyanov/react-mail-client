import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailPage from "./pages/email";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EmailPage />} />
      </Routes>
    </div>
  );
}

export default App;
