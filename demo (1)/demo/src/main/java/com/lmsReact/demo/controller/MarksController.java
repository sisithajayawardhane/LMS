package com.lmsReact.demo.controller;


import com.lmsReact.demo.entity.Course;
import com.lmsReact.demo.entity.Marks;
import com.lmsReact.demo.exception.ResourceNotFoundException;
import com.lmsReact.demo.repo.CourseRepo;
import com.lmsReact.demo.repo.MarksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController


@RequestMapping(value = "api/v1/Marks")
@CrossOrigin("*")
public class MarksController {

    @Autowired
    private MarksRepo marksRepo;

    @GetMapping
    public List<Marks> getMarks() {

        return marksRepo.findAll();
    }

    //add courses to the database
    @PostMapping
    public Marks saveMarks(@RequestBody Marks marks){
        return marksRepo.save(marks);
    }

    //build get element by id
    @GetMapping("{id}")
    public ResponseEntity<Marks> getMarksById(@PathVariable long id){
        Marks marks=marksRepo.findById(id)
                .orElseThrow(() ->new ResourceNotFoundException("marks id doesnt exist"));
        return  ResponseEntity.ok(marks);
    }

    //update courses
    //IN HERE WE USE ALL GETTERS AND SETTERS
    @PutMapping("{id}")
    public ResponseEntity<Marks> updateMarks(@PathVariable long id,@RequestBody Marks marksDetails){
        Marks updateMarks=marksRepo.findById(id).
                orElseThrow(()->new ResourceNotFoundException("Marks not exist"));
        updateMarks.setCode(marksDetails.getCode());
        updateMarks.setStudent_id(marksDetails.getStudent_id());
        updateMarks.setGrade(marksDetails.getGrade());


        marksRepo.save(updateMarks);
        return ResponseEntity.ok(updateMarks);

    }

    //DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteMarks(@PathVariable long id){

        Marks marks = marksRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Marks not exist with id: " + id));

        marksRepo.delete(marks);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
