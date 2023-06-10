// import {Context} from "../util/globalContext";
// import { useContext, useEffect} from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// const UserSession = ({children}) =>{

//       const [login, setLogin] = useContext(Context);
//       const sessionID = localStorage.getItem("sessionID");
      
      
//       useEffect(() =>{

//             const fetchSession = async() =>{

              

//               if(sessionID ===null){
//                 login.isLoggedIn = false;
//                 return;
//               }
              
        
//               await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{
              
//               sessionStorage.setItem("userID",res.data.userId);
//               sessionStorage.setItem("userRole",res.data.userRole);
//               sessionStorage.setItem("userEmail",res.data.userEmail);
//               // setLogin({ //Not working for some reason
//               //     isLoggedIn: true,
//               //   })
//               login.isLoggedIn = true;
              
//               if(login.isLoggedIn === true){
//                 return children;
//               }
             
            
//             }).catch(() =>{
//               localStorage.clear();
//               login.isLoggedIn = false;
//               sessionStorage.clear();
              
              
//             })
        
//             }
        
//             fetchSession();
        
//           },[]);
        

//           console.log(login)
//           if(login.isLoggedIn){
//             return children;
//           }
//           return <Navigate to="/signin"></Navigate>
          


  

// }

// export default UserSession;