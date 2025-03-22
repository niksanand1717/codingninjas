// // Please don't change the pre-written code
// // Import the necessary modules here

// import mongoose from "mongoose";
// import { jobSchema } from "./schema/newJob.schema.js";
// import { applyJobSchema } from "./schema/applyJob.schema.js";

// const jobModel = mongoose.model("Job", jobSchema);
// const applyModel = mongoose.model("ApplyJob", applyJobSchema);

// export const createNewJob = async (job) => {
//   // Write your code here
//   const result = new jobModel(job);
//   // await result.save();
//   // return result;
//   return await result.save();
// };

// export const applyJobRepo = async (jobId, userId) => {
//   // Write your code here
//   // Check if the user has already applied for the job
//   const existingApplication = await applyModel.findOne({
//     jobId: jobId,
//     userId: userId,
//   });

//   if (existingApplication) {
//     throw new Error("User has already applied for this job.");
//   }

//   // Create and save the new application
//   const result = await applyModel.create({ jobId, userId });
//   return result;
// };
// export const findJobRepo = async (id) => {
//   // Write your code here
//   const job = await jobModel.findById(id);

//   if (!job) {
//     throw new Error("Job not found.");
//   }

//   return job;
// };

import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";

const JobModel = mongoose.model("Job", jobSchema);
const ApplyJobModel = mongoose.model("JobApplicants", applyJobSchema);

export const createNewJob = async (job) => {
  const newJob = new JobModel(job);
  return await newJob.save();
};

export const findJobRepo = async (_id) => {
  return await JobModel.findById(_id);
};

export const applyJobRepo = async (jobId, userId) => {
  const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
  if (checkIfAlreadyApplied) {
    return false;
  } else {
    // updateApplyJobModel
    await new ApplyJobModel({ jobId, userId }).save();

    // update jobModel applicants
    const filter = { _id: jobId };
    const update = { $push: { applicants: userId } };
    return await JobModel.findByIdAndUpdate(filter, update, {
      new: true,
    });
  }
};
