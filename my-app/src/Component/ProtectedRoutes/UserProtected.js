import React from 'react'
import { Navigate ,useLocation} from 'react-router-dom'
import  {redirect } from 'react-router-dom';

function UserProtected({User,children}) {
 
    if(!User){
      return <redirect to="/login" replace />;
    }else{
      return children
    }
  
    
  
}

export default UserProtected