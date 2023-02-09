import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../features/listReducer";
import "./Modal.css";

interface IProps {
  confirmModal?: boolean;
  confirm?: () => void;
  onClose: () => void;
}

export default function Modal({ confirmModal, onClose, confirm }: IProps) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const handleAdd = (text: string) => {
    if (value) {
      dispatch(addToList({ id: Date.now(), text: text }));
      setError("");
      onClose();
    } else {
      setError("Поле пустое");
    }
  };

  if (confirmModal) {
    return (
      <div className="dialog" onClick={onClose}>
        <div
          className="dialog-content confirm"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="confirm-text">Вы действительно хотите удалить ?</p>
          <div className="dialog-actions">
            <button className="text-btn" onClick={onClose}>
              Нет
            </button>
            <button onClick={confirm} className="accept-btn">
              Да
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dialog" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <input
          className="dialog-input"
          placeholder="Введите текст"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        {error && <p className="error">{error}</p>}
        <div className="dialog-actions">
          <button className="text-btn" onClick={onClose}>
            Отмена
          </button>
          <button onClick={() => handleAdd(value)} className="accept-btn">
            Ок
          </button>
        </div>
      </div>
    </div>
  );
}
