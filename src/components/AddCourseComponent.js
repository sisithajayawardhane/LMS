import React, {useState, useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import CourseService from '../services/CourseService'
import { useNavigate } from 'react-router-dom';




const AddCourseComponent = () => {
    
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [lecture_id, setLecture_id] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
   
    
    
    const saveOrUpdateCourse = (e) => {
        e.preventDefault();

        const course = {code, description, title, lecture_id};

        if(id){
            CourseService.updateCourse(id, course).then((response) => {
                navigate('/ListCourseComponent');
            }).catch(error => {
                console.log(error)
            })

        }else{
            CourseService.saveAllCourses(course).then((response) =>{

                console.log(response.data)
    
                navigate('/ListCourseComponent');
    
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
      CourseService.getCourseById(id).then((response) => {
        
        setCode(response.data.code)
        setDescription(response.data.description)
        setTitle(response.data.title)
        setLecture_id(response.data.lecture_id)
      }).catch((error) => {
        console.log(error)
      })
    }, [id])
    
    const page_title =()=>{
        if(id){
            return <h2 className = "text-center">Update course module</h2>
        }else{
            return <h2 className = "text-center">Create a new course module</h2>
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
                                    <label className = "form-label"> Course Code :</label>
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
                                    <label className = "form-label"> Course description :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the course description"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the course name"
                                        name = "title"
                                        className = "form-control"
                                        value = {title}
                                        onChange = {(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Lecturer Id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the lecturer id"
                                        name = "lecture_id"
                                        className = "form-control"
                                        value = {lecture_id}
                                        onChange = {(e) => setLecture_id(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCourse(e)} >Submit </button><br/><br/>
                                <Link to="/lec" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
  )


}
export default AddCourseComponent
