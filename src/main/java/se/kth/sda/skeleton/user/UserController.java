package se.kth.sda.skeleton.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class UserController {

    @Autowired
    UserService userService;


    public User findUserByEmail(String email) {
        return userService.findUserByEmail(email);
    }


    public void registrationProcess(User user) {
         userService.register(user);
    }
}
