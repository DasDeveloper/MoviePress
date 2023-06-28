import React, { useEffect, useState } from 'react'
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
  const [movieCategory, setMovieCategory] = useState("")
  const [movieUrl, setMovieUrl] = useState("")

  useEffect(()=>{
    queryDataFunction();
  }, [query])

  useEffect(()=>{
    fetchSession()
  }, [])
  

  const queryDataFunction = async () =>{

    if(query.length===0){
      setQueryData([])
    }
    
    if(query.length!==0){
    await axios.get(`http://localhost:8080/api/search?query=${query}`).then((response)=>{
      
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

        const response = await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{

         
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

  // const handleDeleteMovie = (data) =>{
    
  //   const deleteMovie = async () =>{
  //     await axios.delete(`http://localhost:8080/api/movies/delete/${data.movieId}`)
  //   }
  //   deleteMovie();
  //     Swal.fire({
  //       title:"You`ve deleted the movie successfully"
  //     })
    

  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteMovie();

  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
      
  //   })
  // }

  const showNewComponent = () =>{
    
    setShowNew(true);

  }

  const submitNewMovie = async () =>{
    const movie = {
      movieId: movieId,
      title:movieTitle,
      director:movieDirector,
      url:movieUrl
    }
    await axios.post("http://localhost:8080/api/movies/add", movie);

    setShowNew(false)
    setMovieId("")
    setMovieTitle("")
    setMovieDirector("")
    setMovieCategory("")
    setMovieUrl("")

    Swal.fire({
      title:"Succesfully added a new movie"
    })
  }
  
  const cancelNewMovie = () =>{
    setShowNew(false)
    setMovieId("")
    setMovieTitle("")
    setMovieDirector("")
    setMovieCategory("")
    setMovieUrl("")
  }
  return (
    <div className='adminpage'>
        <div className="admin-search-dashboard">
          <div className='admin-search-dashboard-top'>
            <input type='text' onChange={(e) => {setQuery(e.target.value)}}placeholder='search'/>
            <button onClick={showNewComponent}className="search-button"type="button" class="btn btn-primary">New</button>
          </div>

          <div className="admin-search-dashboard-table">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Directors</th>
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

              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieId(e.target.value)}} margin="normal" label="ID" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieTitle(e.target.value)}} margin="normal" label="Title" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieDirector(e.target.value)}} margin="normal" label="Director" variant="outlined" />
              <TextField style = {{width: 600, margin:20}} id="outlined-basic" onChange={e=>{setMovieCategory(e.target.value)}} margin="normal" label="Category" variant="outlined" />
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
