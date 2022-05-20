package com.lmsReact.demo.repo;

import com.lmsReact.demo.entity.Marks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarksRepo extends JpaRepository<Marks,Long> {
}
