import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

import CourseService from '../services/CourseService'

const ListCourseComponent = () => {
//take courses from the setCourse array by each line as courses array
    const [courses, setCourse] = useState([])

    useEffect(() => {
        getAllCourses();
     
    }, [])
    const getAllCourses = () => {
        CourseService.getAllCourses().then((response) => {
            setCourse(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    // const deleteCourses = (course_id) => {
    //     CourseService.deleteCourses(course_id).then((response) =>{
    //      getAllCourses();
 
    //     }).catch(error =>{
    //         console.log(error);
    //     })
         
    //  }
    

  return (
    <div className = "container">
            <h2 className = "text-center">List All Courses</h2>
            {/* <Link to = "/add-course" className = "btn btn-primary mb-2" > Add Course </Link> */}
        
            <table className="table table-bordered table-striped">
                <thead>
                    {/* <th> Id </th> */}
                    <th> Course code </th>
                    <th> Course description </th>
                    <th> Course tile </th>
                    <th> Lecturer id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        courses.map(
                            course =>
                            <tr key = {course.id}> 
                                {/* <td> {course.id} </td> */}
                                <td> {course.code} </td>
                                <td> {course.description} </td>
                                <td>{course.title}</td>
                                <td>{course.lecture_id}</td>
                                <td>
                                <Link className="btn btn-info" to={"/stuEnroll"} >Enroll</Link>
                                {/* <Link className="btn btn-info" to={`/update-course/${course.id}`} >Update</Link> */}
                                {/* <button className = "btn btn-danger" onClick = {() => deleteCourses(course.id)}
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

export default ListCourseComponent