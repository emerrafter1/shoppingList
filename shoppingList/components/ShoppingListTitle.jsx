import { useState } from "react";
function ShoppingListTitle() {
  const [listName, setListName] = useState("My Shopping List");
  const [isEditingListName, setIsEditingListName] = useState(false);

  function handleEditClick() {
    setIsEditingListName(true);
  }

  function handleInputChange(event) {
    setListName(event.target.value);
  }

  function handleBlurChange() {
    setIsEditingListName(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditingListName(false);
    }
  }

  return (
    <div className="shopping-list-title">
      {isEditingListName ? (
        <input
        className="edit-list-name"
          type="text"
          value={listName}
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          onKeyDown={handleKeyDown}
        ></input>
      ) : (
        <div className="shopping-list-title-row">
          <h2>{listName}</h2>
          <button className="edit-button" onClick={handleEditClick}>
            ✎
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingListTitle;
