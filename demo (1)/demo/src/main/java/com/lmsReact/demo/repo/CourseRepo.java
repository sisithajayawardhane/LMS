package com.lmsReact.demo.repo;

import com.lmsReact.demo.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Long> {


}
