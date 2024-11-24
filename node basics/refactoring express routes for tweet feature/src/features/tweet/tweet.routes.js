// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import { getTweets, createTweet } from "./tweet.controller";
const router = express.Router();

// Write your code here
// TODO: Refactor these route handlers into tweet.routes.js file using express Router --------->>>>
router.get("", getTweets);

router.post("", createTweet);
// Write your code here

export default router;
