// import { getDB } from "../../config/mongodb.js";

// class ExpenseRepository {
//   constructor() {
//     this.collectionName = "expenses"; // name of the collection in mongodb
//   }

//   // Create a new expense
//   async addExpense(expense) {
//     const db = await getDB();
//     const collection = this.db.collection(this.collectionName);
//     try {
//       const resp = await collection.insertOne(expense);
//       return resp;
//     } catch (error) {
//       return error;
//     }
//   }

//   // Get one expnese by its ID
//   async getOne(id) {}

//   // Get all expenses
//   async getAllExpenses() {}

//   // Add tag to an expense
//   async addTagToExpense(id, tag) {}

//   // Filter expenses based on date, amount, and isRecurring field
//   async filterExpenses(criteria) {}
// }

// export default ExpenseRepository;

import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // MongoDB collection name
  }

  // Create a new expense
  async addExpense(expense) {
    const db = getDB(); // Get the DB instance
    const collection = db.collection(this.collectionName);
    try {
      const resp = await collection.insertOne(expense);
      return resp;
    } catch (error) {
      throw new Error(`Failed to add expense: ${error.message}`);
    }
  }

  // Get one expense by its ID
  async getOne(id) {
    const db = getDB();
    const collection = db.collection(this.collectionName);
    try {
      const expense = await collection.findOne({ _id: new ObjectId(id) });
      return expense;
    } catch (error) {
      throw new Error(`Failed to retrieve expense: ${error.message}`);
    }
  }

  // Get all expenses
  async getAllExpenses() {
    const db = getDB();
    const collection = db.collection(this.collectionName);
    try {
      const expenses = await collection.find().toArray();
      return expenses;
    } catch (error) {
      throw new Error(`Failed to retrieve all expenses: ${error.message}`);
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    const db = getDB();
    const collection = db.collection(this.collectionName);
    try {
      const resp = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $push: { tags: tag } }
      );
      return resp;
    } catch (error) {
      throw new Error(`Failed to add tag: ${error.message}`);
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    const db = getDB();
    const collection = db.collection(this.collectionName);
    try {
      const filteredExpenses = await collection.find(criteria).toArray();
      return filteredExpenses;
    } catch (error) {
      throw new Error(`Failed to filter expenses: ${error.message}`);
    }
  }
}

export default ExpenseRepository;
