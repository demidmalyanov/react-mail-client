import { observer } from "mobx-react-lite";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { IMail } from "./components/Mail";
import MailPage from "./pages/mail";
import { IFolder } from "./components/layout/Folder";
import MailListPage from "./pages/mail-list";
import IndexPage from "./pages/auth";

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

const initialFolders: IFolder[] = [
  {
    icon: "/icons/inbox-icon.svg",
    title: "Входящие",
    urlParam: "inbox",
    readonly: true,
  },
  {
    icon: "/icons/sent-icon.svg",
    title: "Отправленные",
    urlParam: "sent",
    readonly: true,
  },
  {
    icon: "/icons/trash-icon.svg",
    title: "Удаленные",
    urlParam: "trash",
    readonly: true,
  },
  {
    icon: "/icons/spam-icon.svg",
    title: "Спам",
    urlParam: "spam",
    readonly: true,
  },
];

const initApp = () => {
  console.log("init storage");
  localStorage.setItem("init", "true");
  localStorage.setItem("inbox", JSON.stringify(inboxData));
  localStorage.setItem("sent", "[]");
  localStorage.setItem("trash", "[]");
  localStorage.setItem("spam", "[]");
  localStorage.setItem("initFolders", JSON.stringify(initialFolders));
};

const App = observer(() => {
  React.useEffect(() => {
    if (!shouldInit) {
      console.log("not init");
      return;
    }
    initApp();
  }, [shouldInit]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:folder" element={<MailListPage />}>
          <Route path=":id" element={<MailPage />} />
        </Route>
      </Routes>
    </div>
  );
});

export default App;
