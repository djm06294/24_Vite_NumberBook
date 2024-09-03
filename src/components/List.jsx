import "../css/list.css";
import ListInput from "./ListInput";
import ListList from "./ListList";

export default function List({ list, saveList }) {
  // list.map((v) => console.log("v", v));

  return (
    <div className="list">
      <ListInput />
      <div className="listsCon">
        {list.map((v, i) => (
          <ListList list={list} idx={i} saveList={saveList} key={i} />
        ))}
      </div>
    </div>
  );
}
