import React from "react";

// Герман смотри сюда, и Миша тоже) Выше описываешь пропсы, ниже вставляешь их как дженерик тип
export interface ITool {
  icon: string;
  title: string;
  action: (arg: any) => void;
}

// Здесь тип Реакт ФС( функциональный компонент, который зависит от интерфейса выше )
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
