import { observer } from "mobx-react-lite";
import React from "react";
import { Link, useParams } from "react-router-dom";
import FolderStore from "../../../store/FolderStore";
import mailStore from "../../../store/MailStore";
import { formatUnixToString } from "../../services/DateTimeService";

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
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex flex-row px-3 relative">
      <td className="p-4 w-4 mr-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            value={id}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300    dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => {
              mailStore.onToggleMail(parseInt(e.target.value), !checked);
              setChecked(!checked);
            }}
            checked={mailStore.chosen.includes(id)}
          />
        </div>
      </td>
      <Link to={`/${folder}/${id}`} className="w-full flex relative">
        <td className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white mr-4">
          {author}
        </td>

        {subject && (
          <td className="py-4  text-sm  whitespace-nowrap dark:text-white max-w-[200px] mr-4">
            <p className="truncate">{subject}</p>
          </td>
        )}
        <td className="py-4  max-w-[800px]">
          <p
            className={`${
              read ? "text-gray-400" : "text-black font-medium"
            } text-ellipsis truncate  text-sm`}
          >
            {text}
          </p>
        </td>
      </Link>
      <td className="py-4 text-sm text-right whitespace-nowrap absolute right-2">
        <p className="font-light text-gray-400">
          {formatUnixToString(timestamp)}
        </p>
      </td>
    </tr>
  );
};

export default observer(Mail);
