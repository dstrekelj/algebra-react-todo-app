import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/ToDoReducer';

export default function ToDoItemForm() {
  const dispatch = useDispatch();
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

  return (
    <form onSubmit={handleOnSubmit}>
      <input name="text" type="text" placeholder="Item text"
        onChange={handleOnChange}
        value={formState.text}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}