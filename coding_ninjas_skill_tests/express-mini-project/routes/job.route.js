const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Job routes
router.get("/", jobController.getAllJobs);
router.get("/new", jobController.createJobForm);
router.post("/", jobController.createJob);
router.get("/:id", jobController.jobDetails);
router.post("/:id/apply", upload.single("resume"), jobController.applyToJob);

module.exports = router;
