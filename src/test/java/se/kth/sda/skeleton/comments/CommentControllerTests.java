package se.kth.sda.skeleton.comments;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Date;
import java.util.Optional;

@SpringBootTest
public class CommentControllerTests {
    @Autowired
    CommentController commentController;

    @MockBean
    CommentService commentService;

    @Test
    public void testGetById() {
        // Arrange
        Comment comment1 = new Comment(1L, "Comment text1", new Date());
        Comment comment2 = new Comment(2L, "Comment text2", new Date());
        Mockito.when(commentService.getCommentById(1L))
                .thenReturn(Optional.of(comment1));

        Mockito.when(commentService.getCommentById(2L))
                .thenReturn(Optional.of(comment2));
        //Act
        Optional<Comment> controllerArticle1 = commentController.getCommentById(1L);
        //Assert
        Assertions.assertEquals(comment1.getBody(), controllerArticle1.get().getBody());
    }
}
