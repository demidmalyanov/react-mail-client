import { makeAutoObservable } from "mobx";
import { IFolder } from "../components/layout/Folder";

interface IFolderStore {}

class FolderStore implements IFolderStore {
  folders: IFolder[] = [
    {
      icon: "/icons/inbox-icon.svg",
      title: "Входящие",
      urlParam: "inbox",
    },
    {
      icon: "/icons/sent-icon.svg",
      title: "Отправленные",
      urlParam: "sent",
    },
    {
      icon: "/icons/trash-icon.svg",
      title: "Удаленные",
      urlParam: "trash",
    },
    {
      icon: "/icons/spam-icon.svg",
      title: "Спам",
      urlParam: "spam",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createFolder(){

  }

  getFolderData(){

  }

  updateFolder(){

  }

  deleteFolder(){
    
  }


}

export default new FolderStore();
