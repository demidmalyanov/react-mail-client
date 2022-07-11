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
    const folderId = `custom_${Date.now()}`;
    localStorage.setItem(folderId, initialFolderData);
    alert("Called");

    // Push new folder to folder list
    this.folders.push({
      icon: "/icons/folder-icon.svg",
      title: title,
      urlParam: folderId,
      readonly: false,
    });

    localStorage.setItem("initFolders", JSON.stringify(this.folders));
  }

  getFolderData(urlParam: string) {
    let dataStr = localStorage.getItem(urlParam);
    if (!dataStr) {
      return [];
    }
    const result = JSON.parse(dataStr);

    return result;
  }

  updateFolder(urlParam: string, newTitle: string) {
    this.folders.forEach((folder) => {
      if (folder.urlParam === urlParam) {
        folder.title = newTitle;
      }
    });
    localStorage.setItem("initFolders", JSON.stringify(this.folders));
  }

  deleteFolder() {}
}

export default new FolderStore();
