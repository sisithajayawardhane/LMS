import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate();
  const uselogin = (e) => {
    
    navigate('/');

  } 
  const usesignup = (e) => {
    
   navigate('/signup');

} 

  return (
    
    <div className='bg-gray-700'>
      <div className='h-20 flex items-center'>
        <p className='text-3xl text-white px-7 font-bold'> Student Management System</p>
        <button onClick={uselogin}
        name='signup-nav' className=' text-white text-xl  absolute right-40 hover:text-yellow-500'>Login</button>
        <button onClick={usesignup} 
        name='signup-nav' className=' text-white text-xl  absolute right-10 hover:text-yellow-500'>Sign Up</button>
        </div>
  
    </div>
  )
}

export default Navbar