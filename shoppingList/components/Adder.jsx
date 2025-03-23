import { useState } from "react";

function Adder({ setItems, items, onClose }) {
  const [addedItem, setAddedItem] = useState({ itemName: "", category: "" });
  const [addItemError, setAddItemError] = useState(false);

  function handleAddItem(event) {
    event.preventDefault();

    if (addedItem.itemName.trim() === "") {
      return setAddItemError(true);
    }

    const updatedItems = [...items, addedItem];
    setItems(updatedItems);

    setAddedItem({ itemName: "", category: "" });
    setAddItemError(false);
    onClose(); // ✅ close modal on success
  }

  function handleInputChange(event) {
    setAddedItem({ ...addedItem, itemName: event.target.value });
  }

  function handleSelectChange(event) {
    setAddedItem({ ...addedItem, category: event.target.value });
  }

  return (
    <form onSubmit={handleAddItem}>
      <label htmlFor="add-list-item">Item</label>
      <input
        type="text"
        id="add-list-item"
        value={addedItem.itemName}
        onChange={handleInputChange}
        className="add-item-input"
      />
      {addItemError && (
        <em className="add-item-input-error">Please enter an item</em>
      )}

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={addedItem.category}
        onChange={handleSelectChange}
      >
        <option value="">-- Please choose an option --</option>
        <option value="Carbohydrates">Carbohydrates</option>
        <option value="Protein">Protein</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruit and vegetables">Fruit and vegetables</option>
        <option value="Fats and sugars">Fats and sugars</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" className="add-item-button">
        + Add to shopping list
      </button>
    </form>
  );
}

export default Adder;
