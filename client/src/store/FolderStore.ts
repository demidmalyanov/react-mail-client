import { makeAutoObservable } from "mobx";
import { IFolder } from "../components/layout/Folder";

interface IFolderStore {}

const initialFolderData = "[]";

const initFolders: any = localStorage.getItem("initFolders");

class FolderStore implements IFolderStore {
  folders: IFolder[] = JSON.parse(initFolders);

  constructor() {
    makeAutoObservable(this);
  }

  createFolder(title: string) {
    // Create new folder and set in storage
    localStorage.setItem(title, initialFolderData);

    // Push new folder to folder list
    this.folders.push({
      icon: "/icons/folder-icon.svg",
      title: title,
      urlParam: `custom_${Date.now()}`,
    });

    localStorage.setItem("initFolders", JSON.stringify(this.folders));
  }

  getFolderData() {}

  updateFolder(title: string) {}

  deleteFolder() {}
}

export default new FolderStore();
