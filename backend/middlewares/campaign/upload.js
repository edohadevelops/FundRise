// import { app } from "../../server.js";
import multer from "multer";

const storage = multer.diskStorage(
    {
        destination: (req,file,cb) => {
            cb(null,'./public/campaign/images')
        },
        filename: (req,file,cb) => {
            const suffix = Date.now()
            cb(null, `${file.fieldname}-${suffix}`)
        }
    }
)

const uploadCampaign = multer({ storage })

export default uploadCampaign;