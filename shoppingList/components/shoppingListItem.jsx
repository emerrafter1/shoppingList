import { useState } from "react";


function ListItem({item}){

    const [itemCheck, setItemCheck] = useState(false)

    function handleItemCheck(){
        setItemCheck(!itemCheck)
    }

    


    return (<li className="list-item"><button onClick={handleItemCheck} className={itemCheck ? "list-item-ticked" : "list-item-unticked"}>{itemCheck ? "✔" : "-"}</button><span className={`list-item-text ${itemCheck ? "strikethrough" : ""}`}>{item.itemName}</span><span className={`list-item-text ${itemCheck ? "strikethrough" : ""}`}>
        <em>{item.category}</em></span></li>)
}

export default ListItem;