import React from 'react'
import './movielist.css'
import { userContext } from '../../Context/Userconext'
import { useContext } from 'react'
import { Link, useNavigation } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { movieContext } from '../../Context/Moviecontext'
function Movielist() {
  const user=useContext(userContext)
  console.log(user);
  const {movies}=useContext(movieContext)

  return (
  
    <div className="container-fluid movielist">
      <div style={{marginTop:'6%'}} className="row d-flex justify-content-end" >
      <div className='col-md-4 col-xs-12'>
     <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     </div>
      </div>
     
    <div className="row">

      {movies.map((Movies,index)=>{
        return(
          <div className="col-md-3">
          <div class="card">
            <Link to={'/subdownloadpage/'+Movies._id}> <img class="card-img-top"src={"http://localhost:8000/admin/image/"+Movies._id} alt="Card cap" /></Link> 
              <div class="card-body">
    
                <p class="card-text">{Movies.name} ({Movies.year})</p>
    
              </div>
            </div>
          </div>
        )
      
      })}
      
    </div>
   </div>


  )
}

export default Movielist