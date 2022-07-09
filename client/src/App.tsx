import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { IMail } from "./components/Mail";
import EmailPage from "./pages/email";

const App = observer(() => {
  const shouldInit = window.localStorage.getItem("init") ? false : true;

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
    if (typeof window !== "undefined") {
      console.log("init storage");
      window.localStorage.setItem("init", "true");
      window.localStorage.setItem("inbox", JSON.stringify(inboxData));
      window.localStorage.setItem("sent", "[]");
      window.localStorage.setItem("trash", "[]");
    }
  }, [shouldInit]);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path=":folder" element={<EmailPage folder="" />} />
        </Route>
      </Routes>
    </div>
  );
});

export default App;
