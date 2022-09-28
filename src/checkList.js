import "./CSS_Files/checkList.css";
import { BiSearch } from "react-icons/bi";

export default function CheckList() {
  return (
    <>
      <div className="outer">
        <div className="inner1">
          <div className="inner11">
            <BiSearch className="searchIcon" />
            <input type={"text"} placeholder="Search Campaign" />
          </div>
          <div className="inner12">
            <label>ADD</label>
          </div>
        </div>
        <div className="outer_inner2">
          <div className="inner2">
            <input type={"checkbox"} className="checkBox" />
            <label>Campaign One</label>
          </div>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </>
  );
}
function List() {
  return (
    <>
      <div className="inner2">
        <input type={"checkbox"} className="checkBox" />
        <label>Campaign One</label>
      </div>
    </>
  );
}
