import "../css/InputCard.css";

export default function InputSelect() {
  return (
    <div className="inputSelect">
      <i>그룹</i>
      <div className="group">
        <select name="" id="">
          <option value="가족"></option>
          <option value="친구"></option>
          <option value="직장"></option>
          <option value="가족"></option>
        </select>
        <button>그룹편집</button>
      </div>
    </div>
  );
}
