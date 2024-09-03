import "../css/list.css";

export default function ListInput() {
  return (
    <div className="listInput">
      <input type="text" placeholder="검색어를 입력 후 엔터를 누르세요" />
      <button>전체리스트 보기</button>
    </div>
  );
}
