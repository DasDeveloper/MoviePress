import React, { useCallback, useEffect, useState } from 'react'
import "../css/adminpage.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2"
import {TextField} from "@mui/material"

const AdminPage = () => {

  const navigate = useNavigate();

  

  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [newData, setNewData] = useState();
  const [showNew, setShowNew] = useState(false);

  const [movieId, setMovieId] = useState("")
  const [movieTitle, setMovieTitle] = useState("")
  const [movieDirector, setMovieDirector] = useState("")
  const [movieDescription, setMovieDescription] = useState("")
  const [movieUrl, setMovieUrl] = useState("")

  useEffect(()=>{
    queryDataFunction();
  }, [query])

  useEffect(()=>{
    fetchSession()
  }, [])

  useEffect(()=>{
    getMovieId()
  })

  
  

  const queryDataFunction = async () =>{


    if(query.length===0){
      setQueryData([])
    }
    
    if(query.length!==0){
      
    await axios.get(`${process.env.SPRING_URL}/api/search?query=${query}`).then((response)=>{
      
      setQueryData(response.data);
    })
  }
  return null

  }

  const fetchSession = async () =>{

    const sessionID = localStorage.getItem("sessionID");



        if(sessionID=== null){
          navigate("/");
        }

        if(sessionID!== null){

        const response = await axios.get(`${process.env.SPRING_URL}/api/session/${sessionID}`).then((res)=>{

         
          sessionStorage.setItem("userID",res.data.userId);
          sessionStorage.setItem("userRole",res.data.userRole);
          sessionStorage.setItem("userEmail",res.data.userEmail);

        
        })
        .catch(() =>{
          localStorage.clear();
          sessionStorage.clear();
          navigate("/")
          

          
        })}
}


  const showNewComponent = () =>{
    
    setShowNew(true);

  }
  const getMovieId = async () =>{

     await axios.get(`${process.env.SPRING_URL}/api/movieId/get`).then((response)=>{

     setMovieId(response.data);


     })

  }

  const submitNewMovie = async () =>{

    if(movieTitle.length===0 || movieDirector.length===0 || movieUrl.length===0){
      Swal.fire({
        title:"Please fill up all the fields"
      })
      return;
    }
    const movie = {
      movieId: movieId,
      title:movieTitle,
      description: movieDescription,
      director:movieDirector,
      url:movieUrl
    }
    await axios.post(`${process.env.SPRING_URL}/api/movies/add`, movie);

    setShowNew(false)
    setMovieId("")
    setMovieTitle("")
    setMovieDirector("")
    setMovieDescription("")
    setMovieUrl("")

    await axios.put(`${process.env.SPRING_URL}/api/movieId/update`)

    Swal.fire({
      title:"Succesfully added a new movie"
    })
  }
  
  const cancelNewMovie = () =>{
    setShowNew(false)
    setMovieId("")
    setMovieTitle("")
    setMovieDirector("")
    setMovieDescription("")
    setMovieUrl("")
  }
  return (
    <div className='adminpage'>
        <div className="admin-search-dashboard">
          <div className='admin-search-dashboard-top'>
            <input type='text' onChange={(e) =>{setQuery(e.target.value)}}placeholder='search'/>
            <button onClick={showNewComponent}className="search-button"type="button" class="btn btn-primary">New</button>
          </div>

          <div className="admin-search-dashboard-table">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Director</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {queryData.map(data =>

                  <tr key={data.id}>
                  <th scope="row">{data.movieId}</th>
                  <td>{data.title}</td>
                  <td>{data.rating}</td>
                  <td>{data.director}</td>
                  <td><button type="button" class="btn btn-danger">Delete</button></td>
                  </tr>
              )}
              
              
              
            </tbody>
          </table>

          </div>

        </div>
        {showNew ? (
          <div className="admin-new">

            <p className='admin-new-title'>Add new movie</p>

            <div className="admin-new-textfields">
              <TextField style = {{width: 600, margin:20}} disabled id="outlined-disabled" label="ID"defaultValue={`${movieId}`}/>
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieTitle(e.target.value)}} margin="normal" label="Title" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieDirector(e.target.value)}} margin="normal" label="Director" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieDescription(e.target.value)}} margin="normal" label="Description" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieUrl(e.target.value)}} margin="normal" label="Youtube Video ID" variant="outlined" />

            
              <button style={{width:300, marginLeft:20}} onClick={submitNewMovie} className="search-button"type="button" class="btn btn-primary">Submit</button>
              <button style={{width:300, marginLeft:20, marginTop:20}} onClick={cancelNewMovie} className="search-button"type="button" class="btn btn-primary">Cancel</button>
            
              
            </div>
            
          </div>
        ):(<></>)}
       

        
    </div>
  )
}

export default AdminPage
