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

    let folderStr = localStorage.getItem(folder);
    if (typeof folderStr === "string") {
      folderArr = JSON.parse(folderStr);
    }
  
  return folderArr.length;
};

const folders: IFolder[] = [
  {
    icon: "/icons/inbox-icon.svg",
    title: "Входящие",
    count: getCounter("inbox"),
    urlParam: "inbox",
  },
  {
    icon: "/icons/sent-icon.svg",
    title: "Отправленные",
    count: getCounter("sent"),
    urlParam: "sent",
  },
  {
    icon: "/icons/trash-icon.svg",
    title: "Удаленные",
    count: getCounter("trash"),
    urlParam: "trash",
  },
  {
    icon: "/icons/spam-icon.svg",
    title: "Спам",
    count: getCounter("spam"),
    urlParam: "spam",
  },
];

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  React.useEffect(() => {}, [folders]);

  return (
    <>
      <Header />

      <div className="bg-white p-4 h-[100%] w-[100%] rounded-3xl flex flex-row justify-between">
        <div className="w-[15%]">
          <FoldersList folders={folders} />
        </div>
        <div className="w-[84%]">{children}</div>
      </div>
    </>
  );
};

export default observer(Layout);
