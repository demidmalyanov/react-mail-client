import { observer } from "mobx-react-lite";
import React from "react";
import FoldersList from "./FoldersList";
import Header from "./Header";
import folderStore from "../../store/FolderStore";
import CreateFolderModal from "./CreateFolderModal";
import { IFolder } from "./Folder";
import { useNavigate } from "react-router-dom";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleReloadPage = () => {
    // reloads page
    navigate(0);
  };

  return (
    <>
      <Header />

      <div className="bg-white p-4 h-[100%] w-[100%] rounded-3xl flex flex-row justify-between">
        <div className="w-[15%]">
          <div className="flex flex-row items-center">
            <CreateFolderModal />

            <button
              onClick={handleReloadPage}
              className="bg-yellow-300 hover:bg-yellow-400 py-2.5 px-3 rounded-md mb-2"
            >
              <img
                className="w-[20px] h-[20px]"
                src="/icons/refresh-icon.svg"
                alt="refresh-icon"
              />
            </button>
          </div>
          <FoldersList />
        </div>
        <div className="w-[84%]">{children}</div>
      </div>
    </>
  );
};

export default observer(Layout);
