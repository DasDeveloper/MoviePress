// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import Signin from "../pages/signin";

// export default async function fetchSession(){

//     const sessionID = localStorage.getItem("sessionID");

//             if(sessionID === null){
//                 return <Signin/>


//             }

//              await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{


//              console.log(res)
             
//               sessionStorage.setItem("userID",res.data.userId);
//               sessionStorage.setItem("userRole",res.data.userRole);
//               sessionStorage.setItem("userEmail",res.data.userEmail);
            
//             }).catch(() =>{
//               localStorage.clear();
//               sessionStorage.clear();

//               return <Navigate to="/signin"></Navigate>
              
//             })

// }