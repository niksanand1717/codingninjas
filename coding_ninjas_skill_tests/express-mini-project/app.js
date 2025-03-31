const express = require("express");
const session = require("express-session");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().replace(/./g, "_") + path.extname(file.originalname)); // append timestamp to avoid file name collisions
  },
});
const upload = multer({ storage: storage });

// Setting EJS as view engine
app.set("view engine", "ejs");

// Routes
const authRoutes = require("./routes/auth.route");
const jobRoutes = require("./routes/job.route");

app.use("/", authRoutes);
app.use("/jobs", jobRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render("error", { message: "Page not found!" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
