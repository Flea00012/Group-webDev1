package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * This class is responsible for mapping comments data to endpoints.
 */

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    /**
     * Retrieves all the comments made to all the posts available on the forum
     * unless an additional parameter is added. In this case,
     * only the comments related to the post whose id was specified as the parameter
     * will be returned.
     * @param postId
     * @return List of all comments or comments associated to the specific post if postId was passed as a parameter.
     */
    @GetMapping("")
    public List<Comment> getAll(@RequestParam(required = false) Long postId) {
        if (postId.equals(null)) {
            return commentService.getAll();
        } else {
            return commentService.getAllByPostId(postId);
        }
    }

    /**
     * Gets a comment by its id.
     * @param id
     * @return Comment with a specified id.
     */
    @GetMapping("/{id}")
    public Optional<Comment> getCommentById(@PathVariable Long id) {
        return commentService.getCommentById(id);
    }

    /**
     * Posts a comment to a selected post
     * @param comment
     * @return Created comment.
     */
    @PostMapping("")
    public Comment create(@RequestBody Comment comment) {
        return commentService.create(comment);
    }

    /**
     * Updates a comment with a given id
     * @param comment
     * @return Updated comment.
     */
    @PutMapping("")
    public Comment update(@RequestBody Comment comment) {
        return commentService.update(comment);
    }

    /**
     * Deletes a comment by id if the user who wants to delete the comment is the one who created it
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        //this one should be implemented based on dependency with user entity
    }

}
