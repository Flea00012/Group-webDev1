package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.post.Post;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;
import java.util.Date;

/**
 * This class is responsible for shaping comment as entity.
 */
@Entity
@Table(name="comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String body;

    @Column(columnDefinition = "TEXT")
    private Date date;

    // Many comments for a single post (save a comment and you
    @ManyToOne
    private Post post;

    //many comments from a single user
    @ManyToOne
    private User commenter;

    public Comment() {

    }

    public Comment(Long id, String body, Date date) {
        this.id = id;
        this.body = body;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getCommenter() {
        return commenter;
    }

    public void setCommenter(User commenter) {
        this.commenter = commenter;
    }
}
