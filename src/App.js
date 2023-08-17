/* eslint-disable no-eval */
import { useState } from "react";
import {
  CalcContainer,
  Info,
  ToggleButton,
  Input,
  Buttons,
} from "./components";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [theme, setTheme] = useState(1);

  // Theme code
  const colors = ["#3a4764", "#e6e6e6", "#160628"];

  document.body.style = `background: ${colors[theme - 1]}`;

  function handleTheme(e) {
    setTheme(Number(e.target.innerText));
    document.body.style = `background: ${colors[theme - 1]}`;
  }

  // Calculation part
  // type with personal keyboard
  function handleInputChange(e) {
    setInputVal(Number(e.target.value.replace(/\w/gi, "")));
  }

  // on click enter key sum
  // on click del or backspace key del
  // function handleKeyClick(e) {
  //   if (inputVal === "") return;
  //   console.log(e.key);
  //   if (e.key === "Enter") {
  //     handleResult();
  //   } else if (e.key === "Delete" || e.key === "Backspace") {
  //     handleDel();
  //   }
  // }

  // type with ui keyboard
  function handleClick(e) {
    setInputVal((cur) => cur + e.target.innerText);
  }

  function handleSign(e) {
    if (inputVal === "") return;
    handleClick(e);
  }

  function handleDel() {
    setInputVal((cur) =>
      String(cur).length === 1 ? "" : String(cur).slice(0, -1)
    );
  }

  function handleReset() {
    setInputVal("");
  }

  function handleResult() {
    setInputVal(eval(inputVal.replace(/x/g, "*")));
  }

  return (
    <CalcContainer theme={theme}>
      <Info>
        <ToggleButton theme={theme} handleTheme={handleTheme} />
      </Info>
      <Input val={inputVal} onChange={handleInputChange} />
      <Buttons
        onClick={handleClick}
        onDel={handleDel}
        onSign={handleSign}
        onReset={handleReset}
        onResult={handleResult}
      />
    </CalcContainer>
  );
}
