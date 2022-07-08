import React from "react";
import Tool from "./Tool";

const Toolslist: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Tool icon="/icons/trash-icon.svg" title="Удалить" action={()=>alert("Called action")} />
    </div>
  );
};

export default Toolslist;
