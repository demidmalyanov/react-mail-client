import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Folder, { IFolder } from "./Folder";

export interface IFolderList {
  folders: IFolder[];
}


const FoldersList: React.FC<IFolderList> = ({folders}) => {
  const {folder} = useParams()


  return (
    <div className="w-[100%] h-[500px]">
      <button
        type="button"
        className="w-full mb-3 text-black bg-yellow-300 hover:bg-yellow-400 shadow-md shadow-yellow-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Создать новую папку
      </button>

      <ul>
        {folders.map((f) => {
          return (
            <li
              className={`${
                folder === f.urlParam ? "bg-gray-300" : ""
              } py-1 px-4 rounded-xl`}
              key={f.title}
            >
              <Folder title={f.title} count={f.count} icon={f.icon} urlParam={f.urlParam} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FoldersList;
