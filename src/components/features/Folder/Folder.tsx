import React from "react";
import { Link, useParams } from "react-router-dom";
import EditFolderModal from "./EditFolderModal";
import FolderStore from "../../../store/FolderStore";
import { observer } from "mobx-react-lite";

export interface IFolder {
  icon?: string;
  title: string;
  count?: number;
  urlParam: string;
  readonly: boolean;
}

const Folder: React.FC<IFolder> = ({
  icon,
  title,
  count,
  urlParam,
  readonly,
}) => {
  const { folder } = useParams();
  const [showBtn, setShowBtn] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!readonly) {
      setShowBtn(true);
    }
  };

  const handleMouseLeave = () => {
    setShowBtn(false);
  };

  return (
    <Link to={`/${urlParam}`}>
      <div
        className={`${
          folder === urlParam ? "bg-gray-300" : ""
        } py-1 px-4 rounded-xl hover:bg-slate-200 flex flex-row justify-between items-center`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center">
          {icon && (
            <img src={icon} className="h-[20px] w-[15px] mr-2" alt="icon" />
          )}
          <p>{title}</p>
        </div>

        <p>{count}</p>
        {showBtn && (
          <div className="flex flex-row">
            <button onClick={() => FolderStore.deleteFolder(urlParam)} className="hover:scale-125 mr-3">
              <img
                className="w-[10px] h-[10px]"
                src="/icons/trash-icon.svg"
                alt="trash"
              />
            </button>
            <EditFolderModal currentParam={urlParam} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default observer(Folder);
