//To save data to Repo,,,### take data from course controller via PostMapping method and save it to
//the data base via repo

//package com.lmsReact.demo.service;
//
//import com.lmsReact.demo.dto.CourseDTO;
import com.lmsReact.demo.entity.Course;
import com.lmsReact.demo.repo.CourseRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.List;
//
//@Service//to services
//@Transactional//to handle all data transactions
//
//
//public class CourseService {
//    @Autowired
//    private CourseRepo courseRepo;  //because we save via CourseRepo
//
//    @Autowired
//    private ModelMapper modelMapper;
//
//
////save course on the datatbase
//    public CourseDTO saveCourse(CourseDTO courseDTO){
//
//        courseRepo.save(modelMapper.map(courseDTO, Course.class));
//        return courseDTO;    //first error ;but we save data via entity,data came from DTO,So first we should map them
//    }
//
//    //show course on the database
//    public List<Course> getAllCourse(){
//        //old one
//        //List<Course>courseList=courseRepo.findAll(); //to put all table data to a data list
//        //return modelMapper.map(courseList, new TypeToken<List<CourseDTO>>(){}.getType());
//
//        //new one
//        return courseRepo.findAll();
//    }
//
//    //update course on the db
//    public CourseDTO updateCourse(CourseDTO courseDTO){
//
//        courseRepo.save(modelMapper.map(courseDTO, Course.class));
//        return courseDTO;    //SAME AS SAVE METHOD
//    }
//
//    //delete course on the database
//    public boolean deleteCourse(CourseDTO courseDTO){
//        courseRepo.delete(modelMapper.map(courseDTO, Course.class));
//        return true;
//    }
//
//}
