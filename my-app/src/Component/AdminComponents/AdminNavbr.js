import React from 'react'
import { Link } from 'react-router-dom'
function AdminNavbr() {
  return (
    <div className="container-fluid navbarr">
    <nav class="navbar navbar-expand-lg bg-dark fixed-top">
<div class="container-fluid">
  <h1 class="navbar-brand" href="#">Msub</h1>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link to='/' class="nav-link active" aria-current="page" href="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link to='admin/viewmovies' class="nav-link" href="/submovies"> View Movies</Link>
      </li>
      <li class="nav-item">
        <Link to='admin/addmovies' class="nav-link" >Add Movies</Link>
      </li>
     
      
      
      {/* <li class="nav-item" id='loginn'>
        <button class='btn btn-secondary ' type='submit'>Login</button>
      </li> */}
    </ul>
    <div class="d-flex">
      <Link to='/adminlogin' class="btn btn-light"     type="submit">Login in</Link>
    </div>
  </div>
</div>
</nav>
  </div>
  )
}

export default AdminNavbr