import { IFolder } from "../components/layout/Folder";
import { IMail } from "../components/Mail";

const shouldInit = localStorage.getItem("init") ? false : true;

const inboxData: IMail[] = [
  {
    id: Date.now()+1,
    author: "Yandex",
    text: "Задачи можно решать в любом порядке. Если что-то не получается, переходите к следующей. Пока время не закончилось, вы сможете вернуться к нерешенной задаче.",
    subject: "Школа интерфейсов",
    read: false,
    timestamp: Date.now(),
  },
  {
    id: Date.now()+2,
    author: "hh.ru",
    text: "Добрый день, большое спасибо за отклик на нашу вакансию, подскажите, есть ли у Вас кейс работ по Web или портфолио? Елена",
    subject: "Новое сообщение от работодателя",
    read: false,
    timestamp: Date.now(),
  },
  {
    id: Date.now()+3,
    author: "hh.ru",
    text: "Здравствуйте!Ваше резюме Fullstack Developerпросматривала компания iSimpleLab.Ознакомьтесь с вакансиями, которые открыты в этой компании, возможно, среди них найдется подходящая.",
    subject: "Ваше резюме просмотренo",
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

export { shouldInit, inboxData, initialFolders, initApp };
