import React from "react";

interface ITool {
  icon: string;
  title: string;
  action: (arg: any) => void;
}

const Tool: React.FC<ITool> = ({ icon, title, action }) => {
  return (
    <div
      className="flex flex-row items-center p-2 justify-center hover:bg-slate-200 cursor-pointer"
      onClick={action}
    >
      <img src={icon} alt="tool-icon" className="h-[15px] w-[15px]" />
      <p className="ml-2 text-sm font-light">{title}</p>
    </div>
  );
};

export default Tool;
