import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';


const Login = () => {

    

    const [user, setuser] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setuser({...user, [e.target.name]: value});
    } 
    
    const loginuser = e => {
        e.preventDefault();
        axios.post("http://localhost:8080/authenticate",user)
            .then(res => {
                console.log(res)
                localStorage.setItem('token',res.data.token);
                
            })
            .catch(err => {
                console.log(err)
            })

            const config = {
                headers: {
                    Authorization:'Bearer ' + localStorage.getItem('token')
                }
            };
            
    
            axios.get("http://localhost:8080/hello", config).then(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err)
                }
            )    
            
            
    }   
  
    
  
    return (
    <>
    <Navbar/>
    <div className=' flex max-w-xl mx-auto border-b shadow items-center '>
        <div className='px-8 py-8'>
            <div className=''>
                <h1 className=' font-thin text-2xl tracking-wider'>Login</h1>
            </div>
            <div className='h-40 w-full my-4'>
                <label className=' block text-gray-600'>Username</label>
                <input 
                    name='username' 
                    value={user.username}
                    onChange={(e) => handleChange(e)} 
                    type='text' 
                    className=' h-8 w-96 border px-3'
                ></input>

                <label className=' block text-gray-600'>Password</label>
                <input 
                    name='password' 
                    value={user.password}
                    onChange={(e) => handleChange(e)} 
                    type='password' 
                    className=' h-8 w-96 border px-3'
                ></input><br/><br/>

                <button onClick={loginuser} name='login' className=' bg-gray-600 text-white rounded-md px-1 py-1'>Login</button>
            </div>

        </div>
    </div>
    </>
    
    
  )
}

export default Login