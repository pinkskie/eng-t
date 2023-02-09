import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IList, removeFromList } from "../../features/listReducer";
import Modal from "../Modal/Modal";
import "./ListItem.css";

interface IProps {
  item: IList;
}

export default function ListItem({ item }: IProps) {
  const dispatch = useDispatch();
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    dispatch(removeFromList(id));
  };

  const toggleModal = () => {
    setConfirmModal((v) => !v);
  };

  return (
    <>
      <div className="item">
        <p>{item.text}</p>
        <button className="delete-btn" onClick={toggleModal}>
          <DeleteIcon />
        </button>
      </div>
      {confirmModal && (
        <Modal
          confirmModal={confirmModal}
          confirm={() => handleDelete(item.id)}
          onClose={toggleModal}
        />
      )}
    </>
  );
}
