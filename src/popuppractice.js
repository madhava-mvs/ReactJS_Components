import { useState } from "react";
import "./CSS_Files/popuppractice.css";
export default function PopUp() {
  const [show, setShow] = useState(false);
    function HandlePopup(){
        setShow(!show)
    }
  return (
    <>
      <PopupDiv show={show} setShow={setShow} />

      <div className="popcontainer">
        <label>click here!</label>
        <button onClick={HandlePopup}>Touch Me!</button>
      </div>
    </>
  );
  function PopupDiv({show , setShow}) {
    function HandlePopupOpen(){
        setShow(!show)
    }
    return (
        show?(<div className="popup_main">
          <div className="popup_inside">
            your in pop uppppppp!!!
            <button onClick={HandlePopupOpen}>Close</button>
          </div>
        </div>):(<></>)
    )
  }
}
