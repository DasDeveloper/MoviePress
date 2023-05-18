import "../css/signin.css"
import {Link} from "react-router-dom"


const Signin = () =>{

    return (
        <div className="signin_container">

            a

                <div className="signin">
                    
                    <div className="header">
                        Log In to your Account
                    </div>
                    
                    <label for="email">Email</label>
                    <input placeholder="Enter email" name="email"/>
                    <label for="password">Password</label>
                    <input placeholder="Enter password" type="password" name="password"/>
                    <div className="header">Don't have an account? <Link to="/signup">Sign Up</Link> </div>
                    <button> Sign In</button>
                
                </div>
            
        </div>
    )
}

export default Signin;