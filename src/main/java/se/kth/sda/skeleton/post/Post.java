package se.kth.sda.skeleton.post;

import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String postBody;

    @ManyToOne
    private User poster;


    //one post with many comments (save a post and all comments)
    @OneToMany(cascade = CascadeType.ALL)
    private List<Comment> comments;

    public Post() {
    }

    public Post(Long id, String postBody) {
        this.id = id;
        this.postBody = postBody;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPostBody() {
        return postBody;
    }

    public void setPostBody(String postBody) {
        this.postBody = postBody;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public User getPoster() {
        return poster;
    }

    public void setPoster(User poster) {
        this.poster = poster;
    }

}
