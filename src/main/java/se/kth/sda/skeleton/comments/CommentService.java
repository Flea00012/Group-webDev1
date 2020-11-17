package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * This class is responsible for connecting RestController to database and
 * for persisting changes made to comments data to database.
 */
@Service
public class CommentService {
    @Autowired
    CommentRepository repository;

    /**
     * Retrieves all the comments from the forum.
     * @return List of all comments.
     */
    public List<Comment> getAll() {
        return repository.findAll();
    }

    /**
     * Retrieves comments written to a specific post.
     * @param postId
     * @return All comments written for a specific post.
     */
    public List<Comment> getAllByPostId(Long postId) {
        return repository.findAllByPostId(postId);
    }

    /**
     * Retreives comment by id.
     * @param id
     * @return Comment with a specific id.
     */
    public Optional<Comment> getCommentById(Long id) {
        return repository.findById(id);
    }

    /**
     * Creates a new comment.
     * @param comment
     * @return New comment.
     */
    public Comment create(Comment comment) {
        return repository.save(comment);
    }

    /**
     * Updates an existing comment.
     * @param comment
     * @return Updated comment.
     */
    public Comment update(Comment comment) {
        return repository.save(comment);
    }

    /**
     * Deletes the comment.
     * @param id
     */
    public void delete(Long id) {
        //this one should be implemented based on dependency with user entity
    }


}
