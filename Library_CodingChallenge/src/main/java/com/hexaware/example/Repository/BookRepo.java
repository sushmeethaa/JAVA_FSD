package com.hexaware.example.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hexaware.example.Entity.Book;
public interface BookRepo extends JpaRepository<Book, Integer> {
    Book findByIsbn(String isbn);
}