import { observer } from "mobx-react-lite";
import React from "react";
import FolderStore from "../../store/FolderStore";
import Folder, { IFolder } from "./Folder";

const FoldersList: React.FC = () => {
  const [folders, setFolders] = React.useState<IFolder[] | null>(null);

  React.useEffect(() => {
    setFolders(FolderStore.folders);
  }, [FolderStore.folders]);

  return (
    <div className="w-[100%] h-[500px]">
      <ul>
        {folders && folders?.map((f: IFolder) => {
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
