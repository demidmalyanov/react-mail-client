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

interface IEditModalProps {
  currentParam: string;
}

const EditFolderModal: React.FC<IEditModalProps> = ({ currentParam }) => {
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

  const handleFolderUpdate = (newTitle: string) => {
    folderStore.updateFolder(currentParam, newTitle);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleModalOpen} type="button">
        <img
          className="w-[10px] h-[10px] hover:scale-125"
          src="/icons/edit-icon.svg"
          alt="edit-icon"
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        onAfterClose={handleAfterModalOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2>Редактирование папки</h2>
        <input
          id="folder"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Введите новое имя папки"
          className="shadow my-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={() => {
            console.log(title);
            handleFolderUpdate(title);
          }}
          className="w-full bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2 text-sm"
        >
          Редактировать папку
        </button>
      </Modal>
    </>
  );
};

export default EditFolderModal;
