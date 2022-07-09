import { observer } from "mobx-react-lite";
import React from "react";
import { IFolder } from "./layout/Folder";
import Mail, { IMail } from "./Mail";

export interface IMailList {
  mails: IMail[];
}

const MailList: React.FC<IMailList> = observer(({ mails }) => {
  if (mails.length === 0) {
    return <p className="my-2">В данной папке нет сообщений.</p>;
  }

  return (
    <div className="flex flex-col w-[100%] overflow-x-hidden">
      <div className="">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 ">
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 border border-t-slate-200 border-b-slate-200">
                {mails.map((mail) => {
                  return (
                    <Mail
                      key={mail.id}
                      id={mail.id}
                      author={mail.author}
                      subject={mail.subject}
                      text={mail.text}
                      timestamp={mail.timestamp}
                      read={mail.read}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MailList;
