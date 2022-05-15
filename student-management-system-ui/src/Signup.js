import React,{useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';



const Signup = () => {

    const [user, setuser] = useState({
        username:"",
        email:"",
        password:"",
        role:""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setuser({...user, [e.target.name]: value});
    }
   
    const saveuser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", user)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    


  return (
    <>
    <Navbar/>
     <div className=' flex max-w-xl mx-auto shadow items-center  h-100 '>
        <div className='px-8 py-8 border-b'>
            <div className=''>
                <h1 className=' font-thin text-2xl tracking-wider'>Sign Up</h1>
            </div>
            <div className='h-90 w-full my-4'>
                <label className=' block text-gray-600'>Username</label>
                <input 
                type='text' 
                name='username'
                value={user.username}
                onChange={(e) => handleChange(e)}
                className=' h-8 w-96 border px-3'
                ></input>
                <label className=' block text-gray-600'>Email</label>
                <input 
                    type='email' 
                    name='email'
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                    className=' h-8 w-96 border px-3'
                ></input>
                <label className=' block text-gray-600'>Password</label>
                <input 
                    type='password' 
                    name='password'
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                    className=' h-8 w-96 border px-3'
                ></input>
                <label className=' block text-gray-600'>Role</label>
                <input 
                type='text' 
                name='role'
                value={user.role}
                onChange={(e) => handleChange(e)}
                className=' h-8 w-96 border px-3'
                ></input><br/><br/>
                <button 
                name='signup' 
                onClick={saveuser}
                className=' bg-gray-600 text-white rounded-md px-1 py-1'  
                >Sign Up</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Signup