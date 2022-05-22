import axios from 'axios'

const COURSE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/Courses';

class CourseService {
//method to get all courses from the api
    getAllCourses() {
        return axios.get(COURSE_BASE_REST_API_URL);
    }

    //////////////////////////
    getAllCourses2(lec_id) {
        return axios.get(COURSE_BASE_REST_API_URL+'/findByLecture/'+lec_id);
    }


// method to save all courses
    saveAllCourses(course) {
        return axios.post(COURSE_BASE_REST_API_URL, course);
    }

    //
    getCourseById(course_id){
        return axios.get(COURSE_BASE_REST_API_URL+'/'+course_id);
    }

    updateCourse(course_id, course){
        return axios.put(COURSE_BASE_REST_API_URL + '/' +course_id, course);
    }

    deleteCourses(course_id){
        return axios.delete(COURSE_BASE_REST_API_URL + '/' + course_id);
    }

    
}

export default new CourseService();