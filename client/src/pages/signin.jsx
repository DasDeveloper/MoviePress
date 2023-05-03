import "../css/signin.css"


const Signin = () =>{

    return (
        <div>

                <div className="navbar">
                    <div className="left">
                        <p className="logo">MoviePress</p>
                    </div>
                </div>

                <div className="signin">

                    <div className="header">
                        Log In to your Account
                    </div>
                    

                    <label for="email">Email</label>
                    <input placeholder="Enter email" name="email"/>
                    <label for="password">Password</label>
                    <input placeholder="Enter password" type="password" name="password"/>
                    <div className="header">Don't have an account? <href> Sign Up</href> </div>
                    <button> Sign In</button>
                    
                    
            

                </div>
            
        </div>
    )
}

export default Signin;