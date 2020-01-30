const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: './public',
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        let img = file.originalname.split('.').slice(0, -1).join('.');
        let imgname = img + "-" + Date.now() + ext;

        callback(null, imgname);
    }
});

var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
        return cb(newError("You can upload only image files!"), false);
    }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 1000000000000 }
}).array('image', 1);

module.exports = upload