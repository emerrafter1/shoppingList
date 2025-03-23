import { useState } from "react";

function ListItem({ item }) {
  const [itemCheck, setItemCheck] = useState(false);

  function handleItemCheck() {
    setItemCheck(!itemCheck);
  }

  return (
    <li className="list-item">
      <button
        onClick={handleItemCheck}
        className={itemCheck ? "list-item-ticked" : "list-item-unticked"}
      >
        {itemCheck ? "✔" : "-"}
      </button>
      <span className={`list-item-text ${itemCheck ? "strikethrough" : ""}`}>
        {item.itemName}
      </span>
      <span>{item.quantity}</span>
    </li>
  );
}

export default ListItem;
