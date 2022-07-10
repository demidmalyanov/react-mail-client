import { makeAutoObservable } from "mobx";
import { IMail } from "../components/Mail";

export interface IMailStore {
  chosen: number[];
  moveToFolder: (currentFolder: string, destFolder: string) => void;
}

class MailStore implements IMailStore {
  chosen: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  clearChosen() {
    this.chosen = [];
  }

  // Get single mail by id
  getById(currentFolder:string,id:number){

  }

  // Push to chosen when chooses mail
  onToggleMail(id: number, checked: boolean) {
    if (checked) {
      this.chosen.push(id);
    } else {
      this.chosen = this.chosen.filter((item) => item !== id);
    }
  }

  // move mails to another folder
  moveToFolder(currentFolder: string, destFolder: string) {
    let currentFolderData = [];
    let destFolderData: any = [];

    const currentFolderStr: any = localStorage.getItem(currentFolder);
    const destFolderStr = localStorage.getItem(destFolder);

    if (currentFolder && destFolderStr) {
      currentFolderData = JSON.parse(currentFolderStr);
      destFolderData = JSON.parse(destFolderStr);

      // push mails to destination arr
      currentFolderData.forEach((mail: any) => {
        if (this.chosen.includes(mail.id)) {
          destFolderData.push(mail);
          localStorage.setItem(
            destFolder,
            JSON.stringify(destFolderData)
          );
        }
      });

      // remove mails from current folder
      const filteredFolderData = currentFolderData.filter((mail: IMail) => !this.chosen.includes(mail.id));

      localStorage.setItem(
        currentFolder,
        JSON.stringify(filteredFolderData)
      );
    }
  }

  // manually mark mail as read
  markAsRead(currentFolder: string) {
    const folderStr: any = localStorage.getItem(currentFolder);
    const folderData = JSON.parse(folderStr);

    if (folderData) {
      folderData?.forEach((mail: IMail) => {
        if (this.chosen.includes(mail.id)) {
          mail.read = true;
        }
      });

      localStorage.setItem(currentFolder, JSON.stringify(folderData));
    }
  }
}

export default new MailStore();
