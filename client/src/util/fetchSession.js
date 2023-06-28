    // const navigate = useNavigate();

    // useEffect(()=>{
    //     fetchSession();
    // }, [])

    // const fetchSession = async () =>{

    //     const sessionID = localStorage.getItem("sessionID");
        

    //         if(sessionID === null){

    //             navigate("/signin");

    //         }

    //          await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{


    //          console.log(res)
             
    //           sessionStorage.setItem("userID",res.data.userId);
    //           sessionStorage.setItem("userRole",res.data.userRole);
    //           sessionStorage.setItem("userEmail",res.data.userEmail);

            
    //         }).catch(() =>{
    //           localStorage.clear();
    //           sessionStorage.clear();

    //           navigate("/signin")
              
    //         })

    // }