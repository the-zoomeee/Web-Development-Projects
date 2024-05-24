// index.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage
}).single('file');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Upload endpoint
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send('Error uploading file');
    } else {
      if (!req.file) {
        res.status(400).send('No file selected');
      } else {
        res.send('File uploaded successfully');
      }
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
