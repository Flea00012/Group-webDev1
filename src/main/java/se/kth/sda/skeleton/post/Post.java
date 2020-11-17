package se.kth.sda.skeleton.post;

import se.kth.sda.skeleton.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String body;

    @ManyToOne
    private User user;

//    @OneToMany
//    private List<Comment> comments;

    public Post() {
    }

    public Post(Long id, String body) {
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

//    public List<Comment> getComments() {
//        return comments;
//    }
//
//    public void setComments(List<Comment> comments) {
//        this.comments = comments;
//    }

}
