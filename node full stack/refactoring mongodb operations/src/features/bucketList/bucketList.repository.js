// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "./../../config/mongodb.js";

class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  // async addBucketListItem(bucketListItem) {
  //   try {
  //     const db = await getDB();
  //     const collection = db.collection(this.collection); // Retrieve the actual collection object
  //     const resp = await collection.insertOne(bucketListItem); // Use collection to call insertOne
  //     console.log(resp);
  //     return resp;
  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // }

  // async findOneBucketListItem(title) {
  //   // Write your code here
  //   try {
  //     const db = await getDB();
  //     const collection = db.collection(this.collection); // Retrieve the actual collection object
  //     const resp = await collection.findOne({ title });
  //     return resp;
  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // }

  async addBucketListItem(bucketListItem) {
    const db = await getDB();
    await db.collection(this.collection).insertOne(bucketListItem);
    return bucketListItem;
  }

  async findOneBucketListItem(title) {
    const db = await getDB();
    const item = await db.collection(this.collection).findOne({ title });
    return item;
  }
}

export default BucketListRepository;
