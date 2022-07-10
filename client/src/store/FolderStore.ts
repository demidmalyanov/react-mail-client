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
    localStorage.setItem(`custom_${Date.now()}`, initialFolderData);

    // Push new folder to folder list
    this.folders.push({
      icon: "/icons/folder-icon.svg",
      title: title,
      urlParam: `custom_${Date.now()}`,
      readonly: false,
    });

    localStorage.setItem("initFolders", JSON.stringify(this.folders));
  }

  getFolderData() {}

  updateFolder(urlParam:string, newTitle: string) {
    // copy data from old
    const data: any = localStorage.getItem(urlParam);
    console.log(data);

    // set new key
    localStorage.setItem(newTitle, data);

    // rewrite init folders
    this.folders.forEach((folder) => {
      if (folder.urlParam === urlParam) {
        folder.title = newTitle;
      }
    });

    // remove old item
    localStorage.removeItem(urlParam);
  }

  deleteFolder() {}
}

export default new FolderStore();
