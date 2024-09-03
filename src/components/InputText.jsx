import "../css/InputCard.css";

export default function InputText({ title, value, func, saveInput }) {
  const getChange = (e) => {
    if (title === "핸드폰번호") checkNumber(e);
    else if (title === "이름") checkName(e);
    func(e.target.value);
  };

  const checkNumber = (e) => {
    const num = e.target.value;
    if (!Number.parseInt(num)) {
      e.target.nextSibling.innerHTML = "숫자만 입력해주세요";
      return;
    } else if (num.length > 13) {
      e.target.nextSibling.innerHTML = "번호 길이를 벗어났습니다";
      return;
    } else {
      e.target.nextSibling.innerHTML = "";
    }

    if (num.length === 3 || num.length === 8) e.target.value += "-";
    console.log(e.target.value);
  };

  const checkName = (e) => {
    const koreanRegex = /^[가-힣]+$/;
    if (!koreanRegex.test(e.target.value)) {
      e.target.nextSibling.innerHTML = "한글로 입력해주세요";
    } else {
      e.target.nextSibling.innerHTML = "";
    }
  };

  const checkKey = (e) => {
    if (e.key === "Enter") saveInput();
  };

  return (
    <div className="inputText">
      <i>{title}</i>
      <div className="inputCon">
        <input
          type="text"
          value={value}
          onChange={getChange}
          onKeyUp={checkKey}
        />
        <i className="error"></i>
      </div>
    </div>
  );
}
