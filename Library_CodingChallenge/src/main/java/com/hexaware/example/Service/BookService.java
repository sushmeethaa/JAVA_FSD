package com.hexaware.example.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hexaware.example.Entity.Book;
import com.hexaware.example.Repository.BookRepo;

@Service
public class BookService {
	@Autowired
    BookRepo bookRepository;
	  public Iterable<Book> getAllBooks() {
	        return bookRepository.findAll();
	    }

	    public Book getBookByIsbn(int isbn) {
	        return bookRepository.findById(isbn).orElseThrow(() -> new RuntimeException("Book not found"));
	    }

	    public Book addBook(Book book) {
	        return bookRepository.save(book);
	    }

	    public Book updateBook(int isbn, Book bookDetails) {
	        Book book = getBookByIsbn(isbn);
	        book.setTitle(bookDetails.getTitle());
	        book.setAuthor(bookDetails.getAuthor());
	        book.setYear(bookDetails.getYear());
	        return bookRepository.save(book);
	    }

	    public void deleteBook(int isbn) {
	        Book book = getBookByIsbn(isbn);
	        bookRepository.delete(book);
	    }


}
