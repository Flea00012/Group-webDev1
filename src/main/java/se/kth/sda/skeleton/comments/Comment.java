package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.post.Post;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;


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
    private String date;

    // Many comments for a single post (save a comment and you
    @ManyToOne
    private Post post;

    //many comments from a single user
    @ManyToOne
    private User user;

    public Comment() {

    }

    public Comment(Long id, String body, String date) {
        this.id = id;
        this.body = body;
        this.date = date;
    }

    public Comment(Long id, String body) {
        this.id = id;
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
