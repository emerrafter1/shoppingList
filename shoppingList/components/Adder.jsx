import { useState, useEffect } from "react";

function Adder({ setItems, items, onClose, itemToEdit }) {
  const [addedItem, setAddedItem] = useState({
    itemName: "",
    category: "",
    quantity: 1,
  });

  const [addItemError, setAddItemError] = useState(false);

  // ✅ Prefill form when editing
  useEffect(() => {
    if (itemToEdit) {
      setAddedItem(itemToEdit);
    } else {
      setAddedItem({ itemName: "", category: "", quantity: 1 });
    }
  }, [itemToEdit]);

  function handleAddItem(event) {
    event.preventDefault();

    if (addedItem.itemName.trim() === "") {
      return setAddItemError(true);
    }

    let updatedItems;
    if (itemToEdit) {
      updatedItems = items.map((item) =>
        item === itemToEdit ? addedItem : item
      );
    } else {
      updatedItems = [...items, addedItem];
    }

    setItems(updatedItems);
    setAddedItem({ itemName: "", category: "", quantity: 1 });
    setAddItemError(false);
    onClose();
  }

  function handleInputChange(event) {
    setAddedItem({ ...addedItem, itemName: event.target.value });
  }

  function handleSelectChange(event) {
    setAddedItem({ ...addedItem, category: event.target.value });
  }

  function handleQuantityInput(event) {
    const inputValue = event.target.value;

    setAddedItem({
      ...addedItem,
      quantity: Math.max(1, Number(inputValue)),
    });
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
        <option value="">-- Category --</option>
        <option value="Carbohydrate">Carbohydrates</option>
        <option value="Protein">Proteins</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruit and vegetables">Fruit and vegetables</option>
        <option value="Fats and sugars">Fats and sugars</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={addedItem.quantity}
        min="1"
        placeholder="1"
        onChange={handleQuantityInput}
      />

      <button type="submit" className="add-item-button">
        {itemToEdit ? "Update item" : "+ Add to shopping list"}
      </button>
    </form>
  );
}

export default Adder;
