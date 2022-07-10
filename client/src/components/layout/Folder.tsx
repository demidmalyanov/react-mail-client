import React from "react";
import { Link, useParams } from "react-router-dom";

export interface IFolder {
  icon?: string;
  title: string;
  count?: number;
  urlParam: string;
}

const Folder: React.FC<IFolder> = ({ icon, title, count, urlParam }) => {
  const { folder } = useParams();

  return (
    <Link to={`/${urlParam}`}>
      <div
        className={`${
          folder === urlParam ? "bg-gray-300" : ""
        } py-1 px-4 rounded-xl hover:bg-slate-200 flex flex-row justify-between items-center`}
      >
        <div className="flex flex-row items-center">
          {icon && (
            <img src={icon} className="h-[20px] w-[15px] mr-2" alt="icon" />
          )}
          <p>{title}</p>
        </div>

        <p>{count}</p>
      </div>
    </Link>
  );
};

export default Folder;
