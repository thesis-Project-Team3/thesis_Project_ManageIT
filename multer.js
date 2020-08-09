const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, './uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, path.extname(file.originalname));
  },
});

//file validation
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb({ message: 'Invalid File Format' }, false);
  }
};

const upload = multer({
  storage: storage,
  // limits: { fileSize: 1024 * 1024 },
  fileFilter: fileFilter,
});
module.exports = upload;
