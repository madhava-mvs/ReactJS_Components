import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [text, setText] = useState();
  function OnNavigating1() {
    navigate("/First");
  }
  function OnNavigating2() {
    navigate("/Second");
  }

  return (
    <>
      app
      <input type={"text"} onChange={(e) => setText(e.target.value)} />
      <label>{text}</label>
      <button onClick={() => OnNavigating1()}>navigate to 1</button>
      <button onClick={() => OnNavigating2()}>navigate to 2</button>
    </>
  );
}
