//package com.lmsReact.demo.service;
//
//import com.lmsReact.demo.dao.RoleDao;
//import com.lmsReact.demo.dao.UserDao;
//import com.lmsReact.demo.entity.Role;
//import com.lmsReact.demo.entity.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.HashSet;
//import java.util.Set;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserDao userDao;
//
//    @Autowired
//    private RoleDao roleDao;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    public void initRoleAndUser() {
//
//        Role lectureRole = new Role();
//        lectureRole.setRoleName("Lecture");
//        lectureRole.setRoleDescription("Lecture role");
//        roleDao.save(lectureRole);
//
//        Role studentRole = new Role();
//        studentRole.setRoleName("Student");
//        studentRole.setRoleDescription("Default role for newly created record");
//        roleDao.save(studentRole);
//
//        User lectureUser = new User();
//        lectureUser.setUserName("lecture123");
//        lectureUser.setUserPassword(getEncodedPassword("admin@pass"));
//        lectureUser.setUserFirstName("lecture");
//        lectureUser.setUserLastName("lecture");
//        Set<Role> lectureRoles = new HashSet<>();
//        lectureRoles.add(lectureRole);
//        lectureUser.setRole(lectureRoles);
//        userDao.save(lectureUser);
//
//        User studentuser = new User();
//        studentuser.setUserName("raj123");
//        studentuser.setUserPassword(getEncodedPassword("raj@123"));
//        studentuser.setUserFirstName("raj");
//        studentuser.setUserLastName("sharma");
//        Set<Role> studentRoles = new HashSet<>();
//        studentRoles.add(studentRole);
//        studentuser.setRole(studentRoles);
//        userDao.save(studentuser);
//    }
//        public User registerNewUser(User user) {
//        Role role = roleDao.findById("User").get();
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(role);
//        user.setRole(userRoles);
//        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
//
//        return userDao.save(user);
//    }
//
//    public String getEncodedPassword(String password) {
//        return passwordEncoder.encode(password);
//    }
//}
