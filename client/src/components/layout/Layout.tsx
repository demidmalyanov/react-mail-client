import React from "react";
import FoldersList from "./FoldersList";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="bg-white p-4 h-[100%] w-[100%] rounded-3xl flex flex-row justify-between">
        <div className="w-[15%]">
          <FoldersList />
        </div>
        <div className="w-[84%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
