package com.lmsReact.demo.controller;


import com.lmsReact.demo.dto.CourseDTO;
import com.lmsReact.demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/Courses")
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseService courseService;   //to call saveCourse method

    @GetMapping("/getCourses")
    public List getCourse() {
        return courseService.getAllCours();
    }

//    saving a course to the databse

    @PostMapping("/saveCourses")
    public CourseDTO saveCourse(@RequestBody CourseDTO courseDTO) {
        return courseService.saveCourse(courseDTO);
    }


    //update a course on the database
    @PutMapping("/updateCourses")
    public CourseDTO updateCourse(@RequestBody CourseDTO courseDTO) {
        return courseService.updateCourse(courseDTO);
    }

    //delete a course on the database
    @DeleteMapping("/deleteCourses")
    public boolean deleteCourse(@RequestBody CourseDTO courseDTO) {
        return courseService.deleteCourse(courseDTO);
    }



}
