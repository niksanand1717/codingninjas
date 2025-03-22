// import ExpenseRepository from "./expense.repository.js";

// export default class ExpenseController {
//   constructor() {
//     this.expenseRepository = new ExpenseRepository();
//   }

//   // Create new expense
//   add = async (req, res) => {

//   };

//   // Get a specific expense
//   getOne = async (req, res) => {};

//   // Get all expenses
//   getAll = async (req, res) => {};

//   // Add a tag to an expense
//   addTag = async (req, res) => {};

//   // Filter expenses based on given criteria
//   filter = async (req, res) => {};
// }

import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    const { title, amount, date, isRecurring, tags } = req.body;
    try {
      const newExpense = { title, amount, date, isRecurring, tags };
      const result = await this.expenseRepository.addExpense(newExpense);
      res.status(201).json(newExpense);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to add expense", details: error.message });
    }
  };

  // Get a specific expense by ID
  getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const expense = await this.expenseRepository.getOne(id);
      if (!expense) {
        return res.status(404).json({ error: "Expense not found" });
      }
      res.status(200).json(expense);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to retrieve expense", details: error.message });
    }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try {
      const expenses = await this.expenseRepository.getAllExpenses();
      res.status(200).json(expenses);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to retrieve expenses", details: error.message });
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    const { id } = req.params;
    const { tag } = req.body;
    try {
      const result = await this.expenseRepository.addTagToExpense(id, tag);
      if (result.modifiedCount === 0) {
        return res
          .status(404)
          .json({ error: "Expense not found or tag not added" });
      }
      res.status(200).json({ message: "Tag added successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to add tag", details: error.message });
    }
  };

  // Filter expenses based on given criteria (e.g., date, amount, isRecurring)
  filter = async (req, res) => {
    const { date, amount, isRecurring } = req.body;
    const criteria = {};
    if (date) criteria.date = date;
    if (amount) criteria.amount = amount;
    if (typeof isRecurring !== "undefined") criteria.isRecurring = isRecurring;

    try {
      const filteredExpenses = await this.expenseRepository.filterExpenses(
        criteria
      );
      res.status(200).json(filteredExpenses);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to filter expenses", details: error.message });
    }
  };
}
