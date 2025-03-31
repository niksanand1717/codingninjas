const jobs = []; // In-memory storage for jobs

module.exports = {
  createJob: (title, description, company, location, salary, skills) => {
    const job = {
      id: Date.now().toString(),
      title,
      description,
      company,
      location,
      salary,
      skills,
      applicants: [],
    };
    jobs.push(job);
    return job;
  },
  getAllJobs: () => jobs,
  findJobById: (id) => jobs.find((job) => job.id === id),
  updateJob: (id, updatedJob) => {
    const jobIndex = jobs.findIndex((job) => job.id === id);
    if (jobIndex !== -1) jobs[jobIndex] = { ...jobs[jobIndex], ...updatedJob };
  },
  deleteJob: (id) => {
    const jobIndex = jobs.findIndex((job) => job.id === id);
    if (jobIndex !== -1) jobs.splice(jobIndex, 1);
  },
  addApplicant: (jobId, applicant) => {
    const job = jobs.find((job) => job.id === jobId);
    if (job) job.applicants.push(applicant);
  },
};
