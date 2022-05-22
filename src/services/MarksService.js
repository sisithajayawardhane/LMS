import axios from 'axios'

const COURSE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/Marks';

class MarksService {
//method to get all courses from the api
    getAllMarks() {
        return axios.get(COURSE_BASE_REST_API_URL);
    }

// method to save all courses
    saveAllMarks(marks) {
        return axios.post(COURSE_BASE_REST_API_URL, marks);
    }

    //
    getMarksById(marks_id){
        return axios.get(COURSE_BASE_REST_API_URL+'/'+marks_id);
    }

    updateMarks(marks_id, marks){
        return axios.put(COURSE_BASE_REST_API_URL + '/' +marks_id, marks);
    }

    deleteMarks(marks_id){
        return axios.delete(COURSE_BASE_REST_API_URL + '/' + marks_id);
    }

    
}

export default new MarksService();