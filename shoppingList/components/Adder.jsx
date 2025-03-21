import { useState } from "react";

function Adder({ setItems, items }) {
  const [addedItem, setAddedItem] = useState("");

  function handleAddItem(event) {
    event.preventDefault();

    const updatedItems = [...items, `${addedItem}`];

    setItems(updatedItems);
    setAddedItem("");
  }

  function handleInputChange(event) {
    setAddedItem(event.target.value);
  }

  return (
    <form onSubmit={handleAddItem}>
      <label htmlFor="add-list-item"></label>
      <input
        type="text"
        id="add-list-item"
        value={addedItem}
        onChange={handleInputChange}
      />

      <button>Add item</button>
    </form>
  );
}

export default Adder;
