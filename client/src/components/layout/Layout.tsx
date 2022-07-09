import { observer } from "mobx-react-lite";
import React from "react";
import { IFolder } from "./Folder";
import FoldersList from "./FoldersList";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const getCounter = (folder: string): number => {
  let folderArr = [];

  if (typeof window !== "undefined") {
    let folderStr = window.localStorage.getItem(folder);
    if (typeof folderStr === "string") {
      folderArr = JSON.parse(folderStr);
    }
  }
  return folderArr.length;
};

const folders: IFolder[] = [
  {
    icon: "/icons/inbox-icon.svg",
    title: "Входящие",
    count: getCounter("inbox"),
    to: "/inbox",
  },
  {
    icon: "/icons/sent-icon.svg",
    title: "Отправленные",
    count: getCounter("sent"),
    to: "/sent",
  },
  {
    icon: "/icons/trash-icon.svg",
    title: "Удаленные",
    count: getCounter("trash"),
    to: "/trash",
  },
  {
    icon: "/icons/spam-icon.svg",
    title: "Спам",
    count: getCounter("spam"),
    to: "/spam",
  },
];

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  React.useEffect(() => {
    
  }, [folders]);

  return (
    <div>
      <Header />

      <div className="bg-white p-4 h-[100%] w-[100%] rounded-3xl flex flex-row justify-between">
        <div className="w-[15%]">
          <FoldersList folders={folders} />
        </div>
        <div className="w-[84%]">{children}</div>
      </div>
    </div>
  );
};

export default observer(Layout);
