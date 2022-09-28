import "./CSS_Files/titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function TitleBar() {
  return (
    <>
      <div className="top">
        <div className="top_col1">
          <div className="bagSquare">
            <GiBeachBag className="bagIcon" />
          </div>
          <label>LeadList</label>
        </div>
        <div className="top_col2">
            <div className="top_col21">
                <HiDownload className="downloadIcon"/>
                <label>Bulk Import</label>
            </div>
            <div className="top_col22">
                <BsFillPlusCircleFill className="plusIcon" />
                <label>Add Lead</label>
            </div>
        </div>
      </div>
    </>
  );
}
