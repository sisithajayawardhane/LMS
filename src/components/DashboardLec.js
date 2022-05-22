import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard_lec = () => {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <br/><br/>
      <h2 className = "text-center">Lecturer Dashboard</h2>
      <br/><br/>
      <Link className="btn btn-info" to={"/add-course"} >Add a course module</Link>
      <Link className="btn btn-info" to={"/ListCourseComponent"} >Edit a course module</Link>
      <Link className="btn btn-info" to={"/gradeadding"} >Add Students marks</Link>

</div>


  )
}

export default Dashboard_lec