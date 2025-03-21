import ListItem from "./shoppingListItem";
import Adder from "./Adder";
import { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState(["bread", "milk"]);

  return (
    <section className="shopping-list">
      <ul>
        {items.map((item, i) => {
          return <ListItem key={`shopping-list-item-${i}`} item={item} />;
        })}
      </ul>
      <Adder setItems={setItems} items={items}/>
    </section>
  );
}

export default ShoppingList;
