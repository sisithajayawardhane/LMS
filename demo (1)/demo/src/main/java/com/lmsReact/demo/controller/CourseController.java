package com.lmsReact.demo.controller;


import com.lmsReact.demo.entity.Course;
import com.lmsReact.demo.exception.ResourceNotFoundException;
import com.lmsReact.demo.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController


@RequestMapping(value = "api/v1/Courses")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseRepo courseRepo;


    @GetMapping
//    @Query(value = "SELECT c FROM Course c WHERE c.lecture_id='test'")
    public List<Course> getCourses() {                    //getCourses

        return courseRepo.findAll();
    }

    //add courses to the database
    @PostMapping
    public Course saveCourses(@RequestBody Course course){
        return courseRepo.save(course);
    }

    //build get element by id
    @GetMapping("{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable long id){
        Course course=courseRepo.findById(id)
                .orElseThrow(() ->new ResourceNotFoundException("Course id doesnt exist"));
        return  ResponseEntity.ok(course);
    }



    //update courses
    //IN HERE WE USE ALL GETTERS AND SETTERS
    @PutMapping("{id}")
    public ResponseEntity<Course> updateCourses(@PathVariable long id,@RequestBody Course courseDetails){
        Course updateCourses=courseRepo.findById(id).
                orElseThrow(()->new ResourceNotFoundException("Course not exist"));
        updateCourses.setCode(courseDetails.getCode());
        updateCourses.setDescription(courseDetails.getDescription());
        updateCourses.setTitle(courseDetails.getTitle());
        updateCourses.setLecture_id(courseDetails.getLecture_id());

        courseRepo.save(updateCourses);
        return ResponseEntity.ok(updateCourses);

    }

    //DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable long id){

        Course course = courseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id: " + id));

        courseRepo.delete(course);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    //Sorting
    @GetMapping("/findByLecture/{lecture_id}")
    public List<Course> newMeth(@PathVariable String lecture_id){
        return courseRepo.findByLecture_id(lecture_id);
    }





    //    saving a course to the databse

//    @PostMapping("/saveCourses")
//    public CourseDTO saveCourse(@RequestBody CourseDTO courseDTO) {
//        return courseService.saveCourse(courseDTO);
//    }
//
//
//    //update a course on the database
//    @PutMapping("/updateCourses")
//    public CourseDTO updateCourse(@RequestBody CourseDTO courseDTO) {
//        return courseService.updateCourse(courseDTO);
//    }
//
//    //delete a course on the database
//    @DeleteMapping("/deleteCourses")
//    public boolean deleteCourse(@RequestBody CourseDTO courseDTO) {
//        return courseService.deleteCourse(courseDTO);
//    }



}
