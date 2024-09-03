import "../css/list.css";

export default function ListList({ list, idx, saveList }) {
  const remove = () => {
    console.log("삭제중...", list[idx]);
    list = list.filter((v, i) => i !== idx);
    saveList(list);
  };
  return (
    <div className="listList">
      <i>{`${list[idx].name} ${list[idx].number}`} 가족</i>
      <div>
        <button>세부사항</button>
        <button onClick={remove}>삭제</button>
      </div>
    </div>
  );
}
