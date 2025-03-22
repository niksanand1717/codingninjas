import mongoose from "mongoose";
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //------change code in below functions only--------

  // creation of book
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const result = await this.bookRepository.createBook({
        title,
        author,
        genre,
        copies,
        availableCopies,
      });
      return res.status(201).json(result);
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message || "Failed to create book." });
    }
  };

  // filtering of book by id
  //   getOne = async (req, res) => {
  //     const { bookId } = req.params;
  //     console.log(bookId);

  //     try {
  //       //   if (!mongoose.Types.ObjectId.isValid(bookId)) {
  //       //     return res.status(400).json({ error: "Invalid book ID format." });
  //       //   }

  //       // Retrieve the book by ID
  //       const book = await this.bookRepository.getOne(bookId);
  //       if (!book) {
  //         res.status(404).send("Book not found.");
  //       } else {
  //         res.status(200).send(book);
  //       }

  //       //   book.author = book.author.toString(); // Convert ObjectId to string
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500).json({ error: "Failed to find book." });
  //     }
  //   };
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("Book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };
}
