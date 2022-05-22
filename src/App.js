// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ListMarksComponent from './components/ListMarksComponent';
import AddMarksComponent from './components/AddMarksComponent';
import ListCourseComponent from './components/ListCourseComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddCourseComponent from './components/AddCourseComponent';
import DashboardLec from './components/DashboardLec';
import DashboardStu from './components/DashboardStu';
import GradeAdd from './components/GradeAdd';
import EnrollToCourse from './components/EnrollToCourse';
import UnenrollComponent from './components/UnenrollComponent';
import GradeShowComponent from './components/GradeShowComponent';
import StudentEnroll from './components/StudentEnroll';


function App() {
  return (
    <div>

      {/* //here use routing to navigate between pages */}
       
       {/* -----------------------important when connect---------------------
      lecture pannel->/studentComponenet
      student pannel->/lectureComponent */}

      
      <Router>
      <HeaderComponent/>
      <div className="container">
      <Routes>
      <Route path = "/ListCourseComponent" element={<ListCourseComponent/>}/>
      <Route path = "/add-course" element={<AddCourseComponent/>}/>
      <Route path = "/update-course/:id" element={<AddCourseComponent/>}/>
      

      <Route path = "/ListMarksComponent" element={<ListMarksComponent/>}/>
      <Route path = "/add-marks" element={<AddMarksComponent/>}/>
      <Route path = "/update-marks/:id" element={<AddMarksComponent/>}/>


      <Route path = "/lectureComponenet" element={<DashboardLec/>}/>
      <Route path = "/studentComponenet" element={<DashboardStu/>}/>
      <Route path = "/gradeadding" element={<GradeAdd/>}/>
      <Route path = "/enrolling" element={<EnrollToCourse/>}/>
      <Route path = "/unenrolling" element={<UnenrollComponent/>}/>
      <Route path = "/grades" element={<GradeShowComponent/>}/>
      <Route path = "/lec" element={<DashboardLec/>}/>
      <Route path = "/stuEnroll" element={<StudentEnroll/>}/>

      </Routes>
      
      

      </div>
      <FooterComponent/>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
