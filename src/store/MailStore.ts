import { makeAutoObservable } from "mobx";
import { IMail } from "../components/features/Mail/Mail";

export interface IMailStore {
  chosen: number[];
  moveToFolder: (currentFolder: string, destFolder: string) => void;
  clearChosen: () => void;
  getMailById: (currentFolder: string, id: number) => void;
  onToggleMail: (id: number, checked: boolean) => void;
  markAsRead: (currentFolder: string, id?: number) => void;
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
  getMailById(currentFolder: string, id: number): null | IMail {
    const currentFolderData = localStorage.getItem(currentFolder);
    let result = null;

    if (currentFolderData) {
      let data = JSON.parse(currentFolderData);
      result = data.filter((mail: IMail) => mail.id === id);
    }

    return result[0];
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
    const currentFolderStr: any = localStorage.getItem(currentFolder);
    const destFolderStr = localStorage.getItem(destFolder);

    if (currentFolder && destFolderStr) {
      let currentFolderData = JSON.parse(currentFolderStr);
      let destFolderData = JSON.parse(destFolderStr);

      // push mails to destination arr
      currentFolderData.forEach((mail: any) => {
        if (this.chosen.includes(mail.id)) {
          destFolderData.push(mail);
          localStorage.setItem(destFolder, JSON.stringify(destFolderData));
        }
      });

      // remove mails from current folder
      const filteredFolderData = currentFolderData.filter(
        (mail: IMail) => !this.chosen.includes(mail.id)
      );

      localStorage.setItem(currentFolder, JSON.stringify(filteredFolderData));
    }
  }

  // manually mark mail as read chosen mails
  markAsRead(currentFolder: string, id?: number) {
    const folderStr: any = localStorage.getItem(currentFolder);
    const folderData = JSON.parse(folderStr);

    if (folderData) {
      folderData?.forEach((mail: IMail) => {
        if (this.chosen.includes(mail.id)) {
          mail.read = true;
        }
        // mark as read single mail when visited
        if (mail.id === id) {
          mail.read = true;
        }
      });

      localStorage.setItem(currentFolder, JSON.stringify(folderData));
    }
    this.clearChosen();
  }
}

export default new MailStore();
