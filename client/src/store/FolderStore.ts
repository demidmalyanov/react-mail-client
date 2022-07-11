import { makeAutoObservable } from "mobx";
import { IFolder } from "../components/features/Folder/Folder";

interface IFolderStore {
  folders: IFolder[];
  createFolder: (title: string) => void;
  getFolderData: (title: string) => void;
  updateFolder: (urlParam: string, newTitle: string) => void;
  deleteFolder: (urlParam: string) => void;
}

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

  deleteFolder(urlParam: string) {
    // remove folder
    localStorage.removeItem(urlParam);

    // cleanup init folders list
    let dataStr = localStorage.getItem("initFolders");
    if (dataStr) {
      let data = JSON.parse(dataStr);
      let newData = data.filter((f: IFolder) => f.urlParam !== urlParam);
      this.folders = newData;
      localStorage.setItem("initFolders", JSON.stringify(newData));
    }
  }
}

export default new FolderStore();
