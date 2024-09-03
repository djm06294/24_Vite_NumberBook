import { useState } from "react";
import "../css/InputCard.css";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

export default function InputCard({ list, saveList }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");

  const saveInput = () => {
    const newList = [
      ...list,
      {
        name,
        number,
        note,
      },
    ];
    saveList(newList);
    localStorage.setItem("numberLists", JSON.stringify(newList));

    setName("");
    setNumber("");
    setNote("");
  };

  return (
    <div className="inputCard">
      <InputText title="이름" value={name} func={setName} />
      <InputText
        title="핸드폰번호"
        value={number}
        func={setNumber}
        saveInput={saveInput}
      />
      <InputSelect />
      <InputText
        title="간단한 기록"
        value={note}
        func={setNote}
        saveInput={saveInput}
      />
      <button onClick={saveInput}>저장</button>
    </div>
  );
}
