import { observer } from "mobx-react-lite";
import React from "react";
import Modal from "react-modal";
import folderStore from "../../store/FolderStore";

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

const CreateFolderModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  const [title, setTitle] = React.useState<string>("");
  const handleModalClose = () => setIsOpen(false);

  // disable scroll while open
  const handleModalOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleAfterModalOpen = () => (document.body.style.overflow = "");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFolderCreate = (title: string) => {
    folderStore.createFolder(title);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleModalOpen}
        type="button"
        className="w-full text-black bg-yellow-300 hover:bg-yellow-400 shadow-md shadow-yellow-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Создать новую папку
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        onAfterClose={handleAfterModalOpen}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>Новая папка</h2>
        <input
          id="folder"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Введите имя папки"
          className="shadow my-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          onClick={() => handleFolderCreate(title)}
          className="w-full bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2 text-sm"
        >
          Создать папку
        </button>
      </Modal>
    </>
  );
};

export default observer(CreateFolderModal);
