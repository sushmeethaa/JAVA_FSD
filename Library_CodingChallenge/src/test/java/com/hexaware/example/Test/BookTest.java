package com.hexaware.example.Test;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import com.hexaware.example.Entity.Book;
import com.hexaware.example.Repository.BookRepo;
import com.hexaware.example.Service.BookService;
class BookTest {
	@Autowired
    BookRepo rep;
	 @Autowired
	BookService b;
	@Test
    void testGetAllBooks() {
        Book book1 = new Book();
        book1.setTitle("Bad days");
        book1.setAuthor("Ellie");
        book1.setIsbn(1234);
        book1.setYear(2020);
        rep.save(book1);
	}
}
