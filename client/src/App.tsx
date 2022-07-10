import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { IMail } from "./components/Mail";
import EmailPage from "./pages/mail-list";
import MailPage from "./pages/mail";

const App = observer(() => {
  const shouldInit = localStorage.getItem("init") ? false : true;

  const inboxData: IMail[] = [
    {
      id: Date.now(),
      author: "Demid M",
      text: "Show me your tits",
      read: false,
      timestamp: Date.now(),
    },
    {
      id: 454545665,
      author: "Demid M",
      text: "Show me your ass",
      read: false,
      timestamp: Date.now(),
    },
  ];

  React.useEffect(() => {
    if (!shouldInit) {
      console.log("not init");
      return;
    }

    console.log("init storage");
    localStorage.setItem("init", "true");
    localStorage.setItem("inbox", JSON.stringify(inboxData));
    localStorage.setItem("sent", "[]");
    localStorage.setItem("trash", "[]");
    localStorage.setItem("spam", "[]");
  }, [shouldInit]);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path=":folder" element={<EmailPage folder="" />} />
          <Route path=":folder/:id" element={<MailPage />} />
        </Route>
      </Routes>
    </div>
  );
});

export default App;
