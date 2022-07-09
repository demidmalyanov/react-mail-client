import React from "react";
import { Link } from "react-router-dom";

export interface IFolder{
    icon:string;
    title:string;
    count:number;
    to:string;
}

const Folder: React.FC<IFolder> = ({icon,title,count,to}) => {
  return (
    <Link to={to}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img
            src={icon}
            className="h-[20px] w-[15px] mr-2"
            alt="icon"
          />
          <p>{title}</p>
        </div>

        <p>{count}</p>
      </div>
    </Link>
  );
};

export default Folder;
