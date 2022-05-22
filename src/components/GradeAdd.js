import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import MarksService from '../services/MarksService'

const GradeAdd = () => {
//take courses from the setCourse array by each line as courses array
    const [marks, setMarks] = useState([])

    useEffect(() => {
        getAllMarks();
     
    }, [])
    const getAllMarks = () => {
        MarksService.getAllMarks().then((response) => {
            setMarks(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    const deleteMarks = (marks_id) => {
        MarksService.deleteMarks(marks_id).then((response) =>{
         getAllMarks();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }
    

  return (
    <div className = "container">
            <h2 className = "text-center">Add grades</h2>
            {/* <Link to = "/add-marks" className = "btn btn-primary mb-2" > Add marks </Link> */}
        
            <table className="table table-bordered table-striped">
                <thead>
                    {/* <th> Id </th> */}
                    <th> Course code </th>
                    <th> Student Id </th>
                    <th> Grade </th>
                    <th> Update Students Grades </th>
                </thead>
                <tbody>
                    {
                        marks.map(
                            mark =>
                            <tr key = {mark.id}> 
                                {/* <td> {mark.id} </td> */}
                                <td> {mark.code} </td>
                                <td> {mark.student_id} </td>
                                <td>{mark.grade}</td>
                                <td>
                                <Link className="btn btn-info" to={`/update-marks/${mark.id}`} >Update</Link>
                                {/* <button className = "btn btn-danger" onClick = {() => deleteMarks(marks.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button> */}
                                </td>
    
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default GradeAdd