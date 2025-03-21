import ListItem from "./shoppingListItem";

function ShoppingList() {
  const items = ["bread", "milk"];

  return (
    <ul id="shopping-list">
      {items.map((item, i) => {
        return (
          <ListItem
            key={`shopping-list-item-${i}`}
            item={item}
          />
        );
      })}
    </ul>
  );
}

export default ShoppingList;
