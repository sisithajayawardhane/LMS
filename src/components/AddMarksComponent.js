import React, {useState, useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import MarksService from '../services/MarksService';
import { useNavigate } from 'react-router-dom';

const AddMarksComponent = () => {
    
    const [code, setCode] = useState('')
    const [student_id, setStudent_id] = useState('')
    const [grade, setGrade] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
   
    
    
    const saveOrUpdateMarks = (e) => {
        e.preventDefault();

        const marks = {code, student_id, grade};

        if(id){
            MarksService.updateMarks(id, marks).then((response) => {
                navigate('/ListMarksComponent');
            }).catch(error => {
                console.log(error)
            })

        }else{
            MarksService.saveAllMarks(marks).then((response) =>{

                console.log(response.data)
    
                navigate('/ListMarksComponent');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    

    // const saveOrUpdateCourse = (e) => {
    //     e.preventDefault();
    //     const course = {code, description, title, lecture_id}
    //     CourseService.saveAllCourses(course).then((response) => {
    //         console.log(response.data);
    //         navigate('/ListCourseComponent');

    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }
    useEffect(() => {
        MarksService.getMarksById(id).then((response) => {
        
        setCode(response.data.code)
        setStudent_id(response.data.student_id)
        setGrade(response.data.grade)
      }).catch((error) => {
        console.log(error)
      })
    }, [id])
    
    const page_title =()=>{
        if(id){
            return <h2 className = "text-center">Add Students grades</h2>
        }else{
            return <h2 className = "text-center"> Enrol to a new Course</h2>
        }
    }

    




    

  return (
    <div>
        {/* <h1>test course</h1> */}
        
           <br/><br/>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            page_title()
                        }
                    
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course code :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the course code"
                                        name = "code"
                                        className = "form-control"
                                        value = {code}
                                        onChange = {(e) => setCode(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Student_id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter your student id:"
                                        name = "student_id"
                                        className = "form-control"
                                        value = {student_id}
                                        onChange = {(e) => setStudent_id(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course Grade :</label>
                                    <input
                                        type = "int"
                                        placeholder = "Enter the Grade"
                                        name = "grade"
                                        className = "form-control"
                                        value = {grade}
                                        onChange = {(e) => setGrade(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateMarks(e)} >Submit </button>
                                <Link to="/ListMarksComponent" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
  )


}
export default AddMarksComponent