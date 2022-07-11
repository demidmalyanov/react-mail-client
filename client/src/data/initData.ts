import { IFolder } from "../components/layout/Folder";
import { IMail } from "../components/Mail";

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

export { shouldInit, inboxData, initialFolders,initApp };
