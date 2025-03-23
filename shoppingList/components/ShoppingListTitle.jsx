import { useState } from "react";
function ShoppingListTitle() {
  const [listName, setListName] = useState("My Shopping List");

  return (
    <div>
      <h2>{listName}</h2>
    </div>
  );
}

export default ShoppingListTitle;
