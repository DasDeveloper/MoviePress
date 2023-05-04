import "../css/signup.css"

const Signup = () =>{

    return(
        <div>

            <div className="signup">

                <div className="header">
                    Create your account
                </div>
                
                <label for="firstname">First Name</label>
                <input placeholder="Enter first name" name="firstname"/>
                <label for="lastname">Last Name</label>
                <input placeholder="Enter last name" name="lastname"/>
                <label for="email">Email</label>
                <input placeholder="Enter email" name="email"/>
                <label for="password">Password</label>
                <input placeholder="Enter password" type="password" name="password"/>

                <button> Sign Up</button>

            </div>

        </div>
    )
}


export default Signup;