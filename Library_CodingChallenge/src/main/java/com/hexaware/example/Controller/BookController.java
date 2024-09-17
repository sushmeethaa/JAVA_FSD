package com.hexaware.example.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hexaware.example.Entity.Book;
import com.hexaware.example.Service.BookService;
@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping("/getBooks")
    public Iterable<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/GetaBook/{isbn}")
    public ResponseEntity<Book> getBookByIsbn(@PathVariable int isbn) {
        return ResponseEntity.ok(bookService.getBookByIsbn(isbn));
    }

    @PostMapping("/addBooks")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.addBook(book));
    }

    @PutMapping("/updateBook/{isbn}")
    public ResponseEntity<Book> updateBook(@PathVariable int isbn, @RequestBody Book bookDetails) {
        return ResponseEntity.ok(bookService.updateBook(isbn, bookDetails));
    }

    @DeleteMapping("/deleteBook/{isbn}")
    public ResponseEntity<Void> deleteBook(@PathVariable int isbn) {
        bookService.deleteBook(isbn);
        return ResponseEntity.noContent().build();
    }
}
