package com.lmsReact.demo.repo;

import com.lmsReact.demo.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface CourseRepo extends JpaRepository<Course, Long> {
    //select * from course where lecture_id="test";
    @Query("select c from Course c where c.lecture_id = ?1")
    public List<Course> findByLecture_id(String lecture_id);
}
