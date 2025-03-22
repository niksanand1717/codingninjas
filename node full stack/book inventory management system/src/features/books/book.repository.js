// -------------pre-written code starts---------------
import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";

// creating model from schema.
const booksModel = mongoose.model("Book", bookSchema);

export default class BookRepository {
  //book creation
  async createBook(bookData) {
    const book = new booksModel(bookData);
    const savedBook = await book.save();
    return savedBook;
  }

  // filtering of book by id
  async getOne(id) {
    const book = await booksModel.findById(id);
    console.log(book);
    return book;
  }

  // ------------prewritten code ends----------------

  // Complete the following functions:

  //filtering the books based on genre
  async listBooksByGenre(genre) {
    const books = await booksModel.find({ genre });
    return books;
  }

  //increasing the count of available books
  async updateBookAvailability(bookId, quantity) {
    // const book = await booksModel.findOneAndUpdate(
    // 	{ bookId },
    // 	{ $inc: { availableCopies: quantity } }, // Increment `availableCopies` by `quantity`
    // 	{ new: true }
    // ); // Returns the updated document
    // return book;
    const book = await booksModel.findById(bookId);

    // Calculate the new availableCopies value
    const newAvailableCopies = book.availableCopies + quantity;

    // Update the availableCopies field and save the book
    book.availableCopies = newAvailableCopies;

    await book.save();
    return book;
  }

  //deletion of book
  async deleteBookById(bookId) {
    try {
      const deletedBook = await booksModel.findByIdAndRemove(bookId);
      return deletedBook;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
