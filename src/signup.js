import "./CSS_Files/signup.css"
import logo from "./logo.png"
export default function SignUp(){
    return(
        <>
        <div className="Sign_Login_outer">
                <div className="Sign_outer_row1">
                    <div className="Sign_outer_row11">
                        <div className="Sign_outer_row11_inner1">
                            <img src={logo} alt="invalid path"></img>
                            <label><h3>Logo</h3></label>
                        </div>
                        <div className="Sign_outer_row11_inner2">
                            <h3>Welcome!</h3>
                            <label>Please signup to your account</label>
                        </div>
                        <div className="Sign_outer_row11_inner3">
                                <input type='text' placeholder="FirstName"/>
                                <input type='text' placeholder="LastName"/>
                        </div>
                        <div className="Sign_outer_row11_inner4">
                            <input type='text' placeholder="Email"/>
                        </div>
                        <div className="Sign_outer_row11_inner5">
                            <input type='password' placeholder="Password"/>
                        </div>
                        <div className="Sign_outer_row11_inner6">
                            <input type='password' placeholder="Re-Password"/>
                        </div>
                        <div className="Sign_outer_row11_inner7">
                            <input type='checkbox'/>
                            <label>By Clicking On Register, You Agree To Our<span className="Sign_Terms_Text"> Terms And Conditions</span> of use</label>
                        </div>
                        <div className="Sign_outer_row11_inner8">
                            <button className="Sign_loginButton">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}