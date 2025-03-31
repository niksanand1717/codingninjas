const jobModel = require("../models/job.model");

exports.getAllJobs = (req, res) => {
  const jobs = jobModel.getAllJobs();
  console.log(jobs);
  res.render("jobs/jobslist", { body: "jobs", jobs: jobs }); // Pass 'jobslist' view and jobs data

  //   res.render("jobs/jobslist", { body: jobs });
};

exports.createJobForm = (req, res) => {
  res.render("jobs/newjob", { body: "newjob" });
};

exports.createJob = (req, res) => {
  const { title, description, company, location, salary, skills } = req.body;
  jobModel.createJob(title, description, company, location, salary, skills);
  res.redirect("/jobs");
};

exports.jobDetails = (req, res) => {
  const job = jobModel.findJobById(req.params.id);
  if (job) {
    res.render("jobs/jobDetails", { body: "jobDetails", job });
  } else {
    res.status(404).render("error", { message: "Job not found!" });
  }
};

exports.applyToJob = (req, res) => {
  const jobId = req.params.id;
  const applicant = {
    name: req.body.name,
    email: req.body.email,
    resumePath: req.file.path,
  };
  jobModel.addApplicant(jobId, applicant);
  res.redirect(`/jobs/${jobId}`);
};
