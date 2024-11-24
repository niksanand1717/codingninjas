import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    const fname = Date.now() + "-" + req.file.filename;
    cb(null, fname);
    req.file.filename = fname;
  },
});

export default multer({ storage });
