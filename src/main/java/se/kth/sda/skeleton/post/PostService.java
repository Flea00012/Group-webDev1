package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postrepo;

    public List<Post> getAll() {
        return postrepo.findAll();
    }

    public Optional<Post> getById(Long id) {
        return postrepo.findById(id);
    }

    public Post create(Post post) {
        return postrepo.save(post);
    }

    public Post update(Post updatedPost) {
        return postrepo.save(updatedPost);
    }

    public void delete(Long id) {
        postrepo.deleteById(id);
    }

//    public List<Post> getAllByUserId(Long userId) {
//    }

}
