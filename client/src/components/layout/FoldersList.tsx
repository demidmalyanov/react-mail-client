import { observer } from "mobx-react-lite";
import React from "react";
import Folder, { IFolder } from "./Folder";

export interface IFolderList {
  folders: IFolder[];
}

const FoldersList: React.FC<IFolderList> = ({ folders }) => {
  return (
    <div className="w-[100%] h-[500px]">
      <ul>
        {folders.map((f) => {
          return (
            <li key={f.title}>
              <Folder
                title={f.title}
                count={f.count}
                icon={f.icon}
                urlParam={f.urlParam}
                readonly={f.readonly}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(FoldersList);
