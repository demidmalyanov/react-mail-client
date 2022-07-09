import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router-dom";
import mailStore from "../store/MailStore";
import Tool, { ITool } from "./Tool";

export interface IToolBarProps {
  isActive: boolean;
}

const ToolBar: React.FC<IToolBarProps> = ({ isActive }) => {
  let { folder }: any = useParams();
  if (!folder) {
    folder = "";
  }
  return (
    <div
      className={`${
        !isActive && "pointer-events-none text-gray-400"
      } flex flex-row`}
    >
      {/*Disable area if no one chosen*/}
      <Tool
        icon="/icons/trash-icon.svg"
        title={folder === "trash" ? "Очистить" : "Удалить"}
        action={() => {
          mailStore.moveToFolder(folder, "trash");
          mailStore.clearChosen();
        }}
      />
      <Tool
        icon="/icons/trash-icon.svg"
        title="Прочитано"
        action={() => {
          mailStore.markAsRead(folder);
          mailStore.clearChosen();
        }}
      />
    </div>
  );
};

export default observer(ToolBar);
