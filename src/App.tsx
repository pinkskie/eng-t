import { useState } from "react";
import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
import Modal from "./components/Modal/Modal";
import { selectList } from "./features/listReducer";
import "./App.css";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const list = useSelector(selectList);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="list">
        <div className="list-items">
          {list.length === 0 ? (
            <p className="text">Список пуст</p>
          ) : (
            list.map((item) => <ListItem item={item} key={item.id} />)
          )}
        </div>
        <button className="add-btn" onClick={handleClickOpen}>
          Добавить
        </button>
      </div>

      {open && <Modal onClose={handleClose} />}
    </>
  );
}

export default App;
