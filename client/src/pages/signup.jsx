import { useState } from "react";
import "../css/signup.css"
import axios from "axios"

const Signup = () =>{

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState("User");

    const onSubmit = () => {

        const User = axios.get(`http://localhost:8080/api/users/check/${email}`)
        console.log(User)
    }

    return(
        <div>

            <div className="signup">

                <div className="header">
                    Create your account
                </div>
                
                <label for="firstname">First Name</label>
                <input placeholder="Enter first name" onChange={e => setFirstName(e.target.value)} name="firstname"/>
                <label for="lastname">Last Name</label>
                <input placeholder="Enter last name" onChange={e => setLastName(e.target.value)} name="lastname"/>
                <label for="email">Email</label>
                <input placeholder="Enter email" onChange={e => setEmail(e.target.value)} name="email"/>
                <label for="password">Password</label>
                <input placeholder="Enter password" onChange={e => setPassword(e.target.value)} type="password" name="password"/>

                <button> Sign Up</button>

            </div>

        </div>
    )
}


export default Signup;