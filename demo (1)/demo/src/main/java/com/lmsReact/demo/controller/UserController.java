package com.lmsReact.demo.controller;

//import com.lmsReact.demo.entity.User;
//import com.lmsReact.demo.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.annotation.PostConstruct;
//
//@RestController
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostConstruct
//    public void initRoleAndUser() {
//        userService.initRoleAndUser();
//    }
//
//    @PostMapping({"/registerNewUser"})
//    public User registerNewUser(@RequestBody User user) {
//        return userService.registerNewUser(user);
//    }
//
//    @GetMapping({"/forLecture"})
//    @PreAuthorize("hasRole('Lecture')")
//    public String forLecture(){
//        return "This URL is only accessible to the lecture";
//    }
//
//    @GetMapping({"/forStudent"})
//    @PreAuthorize("hasRole('Student')")
//    public String forStudent(){
//        return "This URL is only accessible to the student";
//    }
//}
