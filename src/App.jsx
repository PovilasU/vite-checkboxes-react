import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const food = [
    { id: 1, name: "Carrot", type: "Vegetable" },
    { id: 2, name: "Tomato", type: "Vegetable" },
    { id: 3, name: "Cucumber", type: "Vegetable" },
    { id: 4, name: "Potato", type: "Vegetable" },
    { id: 5, name: "Lettuce", type: "Vegetable" },
    { id: 6, name: "Onion", type: "Vegetable" },
    { id: 7, name: "Chicken", type: "Meat" },
    { id: 8, name: "Beef", type: "Meat" },
    { id: 9, name: "Pork", type: "Meat" },
    { id: 10, name: "Fish", type: "Meat" },
    { id: 11, name: "Apple", type: "Fruit" },
    { id: 12, name: "Banana", type: "Fruit" },
    { id: 13, name: "Orange", type: "Fruit" },
    { id: 14, name: "Mango", type: "Fruit" },
    { id: 15, name: "Grapes", type: "Fruit" },
    { id: 16, name: "Watermelon", type: "Fruit" },
    { id: 17, name: "Pineapple", type: "Fruit" },
    { id: 18, name: "Strawberry", type: "Fruit" },
    { id: 19, name: "Kiwi", type: "Fruit" },
    { id: 20, name: "Peach", type: "Fruit" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    const itemType = food.find((item) => item.id === itemId).type;

    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        const prevItemType =
          prevSelectedItems.length > 0
            ? food.find((item) => item.id === prevSelectedItems[0]).type
            : null;
        if (prevItemType && prevItemType !== itemType) {
          return prevSelectedItems;
        }
        return [...prevSelectedItems, itemId];
      }
    });
  };
  const fruitList = food.map((item) => (
    <div key={item.id}>
      <input
        type="checkbox"
        checked={selectedItems.includes(item.id)}
        onChange={() => handleCheckboxChange(item.id)}
        disabled={
          selectedItems.length > 0 &&
          food.find((item) => item.id === selectedItems[0]).type !== item.type
        }
      />
      <label>{item.name}</label>
      <label>{item.type}</label>
    </div>
  ));
  return (
    <>
      <p>Food selection with check boxes by type</p>
      {fruitList}
    </>
  );
}

export default App;
