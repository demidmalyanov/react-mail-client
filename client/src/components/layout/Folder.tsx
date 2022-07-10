import React from "react";
import { Link, useParams } from "react-router-dom";
import EditFolderModal from "./EditFolderModal";

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
        {showBtn && <EditFolderModal currentParam={urlParam} />}
      </div>
    </Link>
  );
};

export default Folder;
