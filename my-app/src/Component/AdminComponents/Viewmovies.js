import React, { useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Viewmovie.css'
import { movieContext } from '../../Context/Moviecontext';

function Viewmovies() {
  const {movies}=useContext(movieContext)
  console.log(movies);
 
    
  return (
   
    <div style={{marginTop:'100px',color:'white'}} class="container-fluid ">
      <div className="row">
      <div className="button ">
      <Link to={"admin/addmovies "}> <button className="btn btn-success">Add Movies</button> </Link>
      </div>
      </div>
  
     
    <div className="row">
      <div className="col-md-12 col-xs-12" >
  <table class="table m-2"  >
    
    <thead >
      <tr>
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Year</th>
        <th scope="col">Language</th>
        <th scope="col">Review</th>
        <th scope="col">Genre</th>
        <th scope="col">Image</th>
        <th scope="col">Subtitle</th>
         
      </tr>
    </thead>
        <tbody >
            
                {movies.map((Movies,index)=>{
                  return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{Movies.name}</td>
                    <td>{Movies.year}</td>
                    <td>{Movies.language}</td>
                    <td className='review'>{Movies.review}</td>
                    <td>{Movies.genre}</td>
                    <td ><img style={{width:'60px',height:'80px'}} src={"http://localhost:8000/admin/image/"+Movies._id} alt="" /></td>
                    <td>{Movies._id+'.srt'} </td>
                    <td><a href={'admin/editmovies/'+Movies._id}><button className='btn btn-primary'>Edit</button></a></td>
                    <td><button onClick={()=>{
                      axios.delete("http://localhost:8000/admin/deletemovie/"+Movies._id)
                    }}  className='btn btn-danger'> Delete</button></td>
                    
                    </tr>
                  )
               
            })}
        </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}

export default Viewmovies