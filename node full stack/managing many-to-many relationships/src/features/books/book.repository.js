// Make necessary imports here.
// Don't change the pre-written code.

import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";
import { reviewSchema } from "./review.schema.js";
import { authorSchema } from "./author.schema.js";

// creating model from schema.
const booksModel = mongoose.model("Book", bookSchema);

// creating model for review.
const reviewModel = mongoose.model("Review", reviewSchema);

const authorsModel = mongoose.model("Author", authorSchema);

export default class BookRepository {
  async createBook(bookData) {
    const book = new booksModel(bookData);
    const savedBook = await book.save();
    return savedBook;
  }

  async addReviewToBook(bookId, text, rating) {
    const reviewData = {
      text,
      rating,
      book: new mongoose.Types.ObjectId(bookId),
    };
    const review = new reviewModel(reviewData);
    const savedReview = await review.save();

    const book = await booksModel.findById(bookId);

    book.reviews.push(savedReview._id);

    await book.save();

    return savedReview;
  }

  async getOne(id) {
    const book = await booksModel.findById(id);
    return book;
  }

  async listBooksByGenre(genre) {
    const books = await booksModel.find({ genre });
    return books;
  }

  async updateBookAvailability(bookId, quantity) {
    console.log(bookId);
    const book = await booksModel.findById(bookId);

    // Calculate the new availableCopies value
    const newAvailableCopies = book.availableCopies + quantity;

    // Update the availableCopies field and save the book
    book.availableCopies = newAvailableCopies;

    await book.save();
    return book;
  }

  async deleteBookById(bookId) {
    const deletedBook = await booksModel.findByIdAndRemove(bookId);
    return deletedBook;
  }

  // Complete the following four funtions.
  async createAuthor(authorData) {
    // Create a new author document using the Author schema
    const author = new authorsModel(authorData);
    const savedAuthor = await author.save();
    return savedAuthor;
  }

  async addAuthorToBook(bookId, authorId) {
    // Find the book and author by their IDs
    const book = await booksModel.findById(bookId);
    const author = await authorsModel.findById(authorId);

    if (!book || !author) {
      throw new Error("Book or Author not found");
    }

    // Add author to the book's authors array if not already added
    if (!book.authors.includes(authorId)) {
      book.authors.push(authorId);
      await book.save();
    }

    // Add book to the author's books array if not already added
    if (!author.books.includes(bookId)) {
      author.books.push(bookId);
      await author.save();
    }

    return { book, author };
  }

  async listAuthorsByBook(bookId) {
    // Find the book with its associated authors populated
    const book = await booksModel.findById(bookId).populate("authors");

    if (!book) {
      throw new Error("Book not found");
    }

    return book.authors;
  }

  async listBooksByAuthor(authorId) {
    // Find the author with their associated books populated
    const author = await authorsModel.findById(authorId).populate("books");

    if (!author) {
      throw new Error("Author not found");
    }

    return author.books;
  }
}
