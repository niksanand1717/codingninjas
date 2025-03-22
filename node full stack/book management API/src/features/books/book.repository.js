import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";

const BookModel = mongoose.model("Book", bookSchema);

export default class BookRepository {
  // -----Change code in below functions only-----

  //book creation
  async createBook(bookData) {
    try {
      const newBook = new BookModel(bookData);
      await newBook.save();
      return bookData;
    } catch (error) {
      return error;
    }
  }

  //filtering the book by id
  //   async getOne(id) {
  //     const result = await BookModel.findById(new mongoose.Types.ObjectId(id));
  //     console.log(result);
  //     return result;
  //   }

  async getOne(id) {
    const book = await BookModel.findById(id);
    console.log(book);
    return book;
  }
}
