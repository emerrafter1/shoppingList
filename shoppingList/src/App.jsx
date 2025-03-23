import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";


function App() {
  return (
    <main>
      <Header />
      <ShoppingList />
    </main>
  );
}

export default App;
