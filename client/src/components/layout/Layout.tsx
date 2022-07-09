import React from "react";
import { IFolder } from "./Folder";
import FoldersList from "./FoldersList";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const folders: IFolder[] = [
  {
    icon: "/icons/inbox-icon.svg",
    title: "Входящие",
    count: 5,
    to: "/inbox",
  },
  {
    icon: "/icons/sent-icon.svg",
    title: "Отправленные",
    count: 5,
    to: "/sent",
  },
  {
    icon: "/icons/trash-icon.svg",
    title: "Удаленные",
    count: 5,
    to: "/trash",
  },
  {
    icon: "/icons/spam-icon.svg",
    title: "Спам",
    count: 5,
    to: "/spam",
  },
];

const Layout: React.FC<ILayoutProps> = ({ children }) => {
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

export default Layout;
