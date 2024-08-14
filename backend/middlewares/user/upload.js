import multer from "multer";

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null,'public/user/images')
    },
    filename: (req,file,cb) => {
        const unique = Date.now()
        return cb(null,file.fieldname + "-" + unique)
    }
})

const uploadProfilePicture = multer({ storage });

export default uploadProfilePicture;