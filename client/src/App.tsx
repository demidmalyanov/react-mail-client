import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MailPage from "./pages/mail";
import MailListPage from "./pages/mail-list";
import IndexPage from "./pages/auth";
import { initApp, shouldInit } from "./data/initData";

const App = observer(() => {
  React.useEffect(() => {
    if (!shouldInit) {
      console.log("not init");
      return;
    }
    window.onload = () => initApp();
  }, [shouldInit]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:folder" element={<MailListPage />} />
        <Route path="/:folder/:id" element={<MailPage />} />
      </Routes>
    </div>
  );
});

export default App;
