package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class PostController {

    private PostService postService;

    public PostController(@Autowired PostService postService) {
        this.postService = postService;
    }

    // Return all posts.
    @GetMapping("/posts")
    public List<Post> getAll() {
        return postService.getAll();
    }

    // Return posts by ID.
    @GetMapping("/posts/{id}")
    public Post getById(@PathVariable Long id) {
        return postService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // Create a new post.
    @PostMapping("/posts")
    public Post create(@RequestBody Post post) {
        return postService.create(post);
    }

    // Update a post.
    @PutMapping("/posts")
    public Post update(@RequestBody Post post) {
        return postService.update(post);
    }

    // Delete a post.
    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }

}
