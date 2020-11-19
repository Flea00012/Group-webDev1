package se.kth.sda.skeleton.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.AuthService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    AuthService authService;

    @GetMapping("/me")
    public User findUserByEmail() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }

//    @PostMapping("/register")
//    public void registrationProcess(User user) {
//         userService.register(user);
//    }
}
