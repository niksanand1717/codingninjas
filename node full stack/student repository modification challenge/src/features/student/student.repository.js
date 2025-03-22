// Please don't change the pre-written code
// Import the necessary modules here

import { ObjectId } from "mongodb";
import { getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
    const client = getClient();
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:
  // Start Writing your code
  async createIndexes() {
    const db = getDB();
    try {
      await db.collection(collectionName).createIndex({ name: 1 });
      await db.collection(collectionName).createIndex({ age: 1, grade: -1 });
    } catch (error) {
      console.log("Error in connecting with mongo");
    }
  }

  async getStudentsWithAverageScore() {
    const db = getDB();
    try {
      const result = await db
        .collection(collectionName)
        .aggregate([
          {
            $unwind: "$assignments",
          },
          {
            $group: {
              _id: "$name",
              averageScore: { $avg: "$assignment.score" },
            },
          },
          {
            $project: {
              name: "$_id",
              averageScore: "$averageScore",
            },
          },
        ])
        .toArray();
      return result;
    } catch (error) {
      console.log(error);
      console.log("Error in connecting with mongo");
    }
  }

  async getQualifiedStudentsCount() {
    const db = getDB();
    const result = await db
      .collection(collectionName)
      .aggregate([
        // Step 1: Match students with age > 9 and grade <= 'B'
        {
          $match: {
            age: { $gt: 9 },
            grade: { $lte: "B" }, // Adjust based on your grade system if needed
          },
        },
        // Step 2: Unwind assignments to filter within them
        {
          $unwind: "$assignments",
        },
        // Step 3: Match assignments with title 'math' and score >= 60
        {
          $match: {
            "assignments.title": "math",
            "assignments.score": { $gte: 60 },
          },
        },
        // Step 4: Group by student id and count
        {
          $group: {
            _id: null,
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    return result.length > 0 ? result[0].count : 0;
  }

  async updateStudentGrade(studentId, extraCreditPoints) {
    const db = getDB();
    const client = getClient();
    const session = client.startSession();

    try {
      await session.withTransaction(async () => {
        // Step 1: Update each assignment score with extra credit points
        const student = await db.collection(collectionName).findOneAndUpdate(
          { _id: new ObjectId(studentId) },
          {
            $inc: { "assignments.$[].score": extraCreditPoints }, // Increase score in each assignment
          },
          { returnDocument: "after", session } // Fetch updated document in the same transaction
        );

        // Step 2: Calculate the new average score
        const updatedAssignments = student.value.assignments;
        const totalScore = updatedAssignments.reduce(
          (sum, assignment) => sum + assignment.score,
          0
        );
        const averageScore = totalScore / updatedAssignments.length;

        // Step 3: Determine new grade based on the average score
        let newGrade;
        if (averageScore >= 90) newGrade = "A";
        else if (averageScore >= 80) newGrade = "B";
        else if (averageScore >= 70) newGrade = "C";
        else if (averageScore >= 60) newGrade = "D";
        else newGrade = "F";

        // Step 4: Update the student's grade
        await db
          .collection(collectionName)
          .updateOne(
            { _id: new ObjectId(studentId) },
            { $set: { grade: newGrade } },
            { session }
          );
      });

      console.log("Student grade updated successfully.");
    } catch (error) {
      console.error("Error updating student grade:", error);
      throw error;
    } finally {
      await session.endSession();
    }
  }
}

export default studentRepository;
