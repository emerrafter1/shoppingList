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

  const groupedCategories = items.reduce((categories, item) => {
    const key = item.category || "Other";
    if (!categories[key]) {
      categories[key] = [];
    }
    categories[key].push(item);
    return categories;
  }, {});

  return (
    <section className="shopping-list">
      <ShoppingListTitle />

      
      {Object.entries(groupedCategories).map(([category, items]) => (
        <div key={category} className="category-section">
          <h3 className="category-heading">{category}</h3>
          <ul>
            {items.map((item, i) => (
              <ListItem key={`item-${category}-${i}`} item={item} />
            ))}
          </ul>
        </div>
      ))}


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
