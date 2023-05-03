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

                    <form>

                        <input placeholder="Enter email"/>
                        <input placeholder="Enter password" type="password"/>
                        <button> Sign In</button>
                    </form>
            

                </div>
            
        </div>
    )
}

export default Signin;