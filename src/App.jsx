import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputCard from "./components/InputCard";
import List from "./components/List";

function App() {
  const numberList = JSON.parse(localStorage.getItem("numberLists")) || [];
  const [list, setList] = useState(numberList);

  const saveList = (list) => {
    setList(list);
    localStorage.setItem("numberLists", JSON.stringify(list));
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <InputCard list={list} saveList={saveList} />
        <List list={list} saveList={saveList} />
      </body>
    </>
  );
}

export default App;
