import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useParams } from "react-router-dom";
import mailStore from "../store/MailStore";

export interface IMail {
  readonly id: number;
  author: string;
  text: string;
  subject?: string;
  timestamp: number;
  read: boolean;
}

const Mail: React.FC<IMail> = ({
  id,
  author,
  text,
  subject,
  timestamp,
  read,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  // current folder param
  const { folder } = useParams();

  return (
    <Link to={`/${folder}/${id}`} className="block">
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        <td className="p-4 w-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-1"
              type="checkbox"
              value={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300    dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                setChecked((prevState) => !prevState);
                mailStore.onToggleMail(parseInt(e.target.value), !checked);
              }}
              checked={mailStore.chosen.includes(id)}
            />
          </div>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {author}
        </td>
        <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-white max-w-[200px]">
          <p className="truncate">{subject}</p>
        </td>
        <td className="py-4 px-6 max-w-[800px]">
          <p
            className={`${
              read ? "text-gray-400" : "text-black font-medium"
            } text-ellipsis truncate  text-sm`}
          >
            {text}
          </p>
        </td>
        <td className="py-4 px-6 text-sm text-right whitespace-nowrap">
          <p className="font-light text-gray-400">{timestamp}</p>
        </td>
      </tr>
    </Link>
  );
};

export default observer(Mail);
