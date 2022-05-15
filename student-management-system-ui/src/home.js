//import axios from "axios";
import React from "react";
import { Component } from "react";
import Navbar from './Navbar';

export default class Home extends Component {

    
    componentDidMount(){
        
        // const config = {
        //     headers: {
        //         Authorization:'Bearer ' + localStorage.getItem('token')
        //     }
        // };

        // axios.get("http://localhost:8080/hello", config).then(
        //     res => {
        //         console.log(res);
        //         // this.setState({
        //         //     user : res.data
        //         // })

        //     },
        //     err => {
        //         console.log(err)
        //     }
        // )
    }

    render(){
        return(
            <>
            <Navbar/>
            <h2>you are not logged in</h2>
            </>
        )
    }

}