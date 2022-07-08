import React from "react";

const EmailsTable: React.FC = () => {
  return (
    <div className="flex flex-col w-[100%] overflow-x-hidden">
      <div className="">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 ">
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 border border-t-slate-200 border-b-slate-200">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300    dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Yandex Contest
                  </td>
                  <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-white max-w-[200px]">
                    <p className="truncate">Mail subjectI</p>
                  </td>
                  <td className="py-4 px-6 max-w-[800px]">
                    <p className="text-ellipsis truncate text-gray-400 text-sm">
                      Спасибо за интерес к Школе бэкенд-разработки.На решение
                      дается пять часов. Отсчет начнется после нажатия на кнопку
                      «Стартовать виртуальное соревнование» на странице задания.
                      У вас будет только одна попытка, поэтому перед началом
                      рекомендуем убедиться, что у вас стабильное
                      интернет-соединение и минимум отвлекающих факторов.
                    </p>
                  </td>
                  <td className="py-4 px-6 text-sm text-right whitespace-nowrap">
                    <p className="font-light text-gray-400">9 Jul</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailsTable;
