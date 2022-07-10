import { observer } from "mobx-react-lite";
import React from "react";
import FoldersList from "./FoldersList";
import Header from "./Header";
import folderStore from "../../store/FolderStore";
import CreateFolderModal from "./CreateFolderModal";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  return (
    <>
      <Header />

      <div className="bg-white p-4 h-[100%] w-[100%] rounded-3xl flex flex-row justify-between">
        <div className="w-[15%]">
          <CreateFolderModal/>
          <FoldersList folders={folderStore.folders} />
        </div>
        <div className="w-[84%]">{children}</div>
      </div>
    </>
  );
};

export default observer(Layout);
