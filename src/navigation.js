import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
// import App from "./App.js";
import First from "./FirstFile.js";
// import Test from "./login.js";
import Second from "./SecondFile.js";
// import SignUp from "./signup.js";
export default function Nav() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}></Route>
            <Route path={"/First"} element={<First/>}></Route>
            <Route path={"/Second"} element={<Second/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
