import {useEffect, useState } from "react";
import "../css/signup.css";
import axios from "axios";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


const Signup = () =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");
    const [isEmailAlreadyUsed, setEmailAlreadyUsed] = useState(false);
    const navigate = useNavigate();

    // useEffect( () =>{

    // }, [isEmailAlreadyUsed])

    const onSubmit = async () => {

        if(firstName.length === 0 || lastName.length===0 || email.length===0 || password.length===0){
            Swal.fire({
                title:"Please fill all the required fields!"
            })
            return;
        }
        
      const isAlreadyUsed =  await axios.get(`http://localhost:8080/api/users/check/${email}`);
      
        if(isAlreadyUsed.data !=null){
            Swal.fire({
                title:"Email is already used"
            })
            
        }
        else{
            await axios.post(`http://localhost:8080/api/auth/signup`, {
                firstName: firstName,
                lastName:lastName,
                email:email,
                password:password,
                role:role
            }).then( ()=>{
                Swal.fire({
                    title:"Successfully created account!"
                })
                navigate("/signin")
                
            })
        }

        
    }

    return(
        <div className="signup_container">
            a
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
                <div className="header">Already have an account? <Link to="/signin">Sign In</Link> </div>

                <button onClick={onSubmit}> Sign Up</button>

            </div>

        </div>
    )
}


export default Signup;