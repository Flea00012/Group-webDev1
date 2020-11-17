/*package se.kth.sda.skeleton.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("")
    public User findUserByEmail(String email) {
        return userService.findUserByEmail(email);
    }

    @PostMapping("/register")
    public void registrationProcess(User user) {
         userService.register(user);
    }
}*/
