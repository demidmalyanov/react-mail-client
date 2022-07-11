import React from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import folderStore from "../../../store/FolderStore";
import MailStore from "../../../store/MailStore";
import Tool from "../Toolbar/Tool";
import { observer } from "mobx-react-lite";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ChooseFolderModal: React.FC = () => {
  // get current folder
  const { folder }: any = useParams();

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState("");

  const handleModalClose = () => setIsOpen(false);

  // disable scroll while open
  const handleModalOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleAfterModalOpen = () => (document.body.style.overflow = "");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleMoveToFolder = () => {
    MailStore.moveToFolder(folder, value);
    MailStore.clearChosen();
    setIsOpen(false);
  };

  return (
    <>
      <Tool
        icon="/icons/folder-icon.svg"
        title="В папку"
        action={handleModalOpen}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        onAfterClose={handleAfterModalOpen}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <fieldset>
          <legend>Выберите папку назначения</legend>

          {/*Filter array to skip current folder to avoid deleting, then map it */}
          {folderStore.folders && folderStore.folders
            .filter((f) => f.urlParam !== folder)
            .map((f) => {
              return (
                <React.Fragment key={f.urlParam}>
                  <div className="flex items-center">
                    <input
                      id={f.urlParam}
                      type="radio"
                      name="folder"
                      value={f.urlParam}
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300    dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioChange}
                    />
                    <label htmlFor={f.urlParam} className="ml-2">
                      {f.title}
                    </label>
                  </div>
                </React.Fragment>
              );
            })}
        </fieldset>

        <button
          onClick={handleMoveToFolder}
          className="w-full bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2 text-sm my-2"
        >
          Переместить сообщения
        </button>
      </Modal>
    </>
  );
};

export default observer(ChooseFolderModal);
