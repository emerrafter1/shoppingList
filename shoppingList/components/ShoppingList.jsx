import ListItem from "./shoppingListItem";
import Adder from "./Adder";
import ListItemModal from "./ListItemModal"; // ✅ Make sure it's imported
import { useState } from "react";
import ShoppingListTitle from "../components/ShoppingListTitle";

function ShoppingList() {
  const [items, setItems] = useState([
    { itemName: "bread", category: "Carbohydrates" },
    { itemName: "milk", category: "Dairy" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="shopping-list">
      <ShoppingListTitle />

      <ul>
        {items.map((item, i) => {
          return <ListItem key={`shopping-list-item-${i}`} item={item} />;
        })}
      </ul>

      <button className="add-item-button" onClick={() => setIsModalOpen(true)}>
        + Add item
      </button>

      <ListItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Adder
          setItems={setItems}
          items={items}
          onClose={() => setIsModalOpen(false)}
        />
      </ListItemModal>
    </section>
  );
}

export default ShoppingList;
