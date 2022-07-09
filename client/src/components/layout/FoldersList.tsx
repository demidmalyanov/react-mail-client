import React from "react";
import { useLocation } from "react-router-dom";
import Folder, { IFolder } from "./Folder";

export interface IFolderList {
  folders: IFolder[];
}


const FoldersList: React.FC<IFolderList> = ({folders}) => {
  const location = useLocation();


  return (
    <div className="w-[100%] h-[500px]">
      <button
        type="button"
        className="w-full mb-3 text-black bg-yellow-300 hover:bg-yellow-400 shadow-md shadow-yellow-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Написать письмо
      </button>

      <ul>
        {folders.map((f) => {
          return (
            <li
              className={`${
                location.pathname === f.to ? "bg-gray-300" : ""
              } py-1 px-4 rounded-xl`}
              key={f.title}
            >
              <Folder title={f.title} count={f.count} icon={f.icon} to={f.to} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FoldersList;
