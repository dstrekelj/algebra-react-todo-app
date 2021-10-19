import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  markItemAsDone,
  selectAllItems,
} from "./reducers/ToDoReducer";
import ToDoItem from "./components/ToDoItem";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectAllItems);

  const [ formState, setFormState ] = useState({ text: "" });

  const handleOnChange = (event) => {
    event.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(formState));
    setFormState({ text: "" });
  }

  const handleOnDelete = (item, index) => (event) => {
    dispatch(deleteItem(item));
  }

  const handleOnToggle = (item, index) => (event) => {
    dispatch(markItemAsDone(item, !item.isDone));
  }

  return (
    <div>
      <div>
        {todoItems.map((item, index) =>
          <ToDoItem key={index}
            isDone={item.isDone}
            onDelete={handleOnDelete(item, index)}
            onToggle={handleOnToggle(item, index)}
          >
            {item.text}
          </ToDoItem>
        )}
      </div>
      <form onSubmit={handleOnSubmit}>
        <input name="text" type="text" placeholder="Item text"
          onChange={handleOnChange}
          value={formState.text}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
