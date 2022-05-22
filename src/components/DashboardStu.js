import React from 'react'
import {Link} from 'react-router-dom'

const DashboardStu = () => {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <br/><br/>
      <h2 className = "text-center">Student Dashboard</h2>
      <br/><br/>

  <Link className="btn btn-info" to={"/enrolling"} >Enroll to a course module</Link>
      <Link className="btn btn-info" to={"/unenrolling"} >Unenroll From A course Module</Link>
      <Link className="btn btn-info" to={"/grades"} >Show Grades</Link>
</div>
  )
}

export default DashboardStu