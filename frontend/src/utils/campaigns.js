import { useContext } from "react";
import { axiosQuery } from "./api";
import { AppContext } from "../store/AppContext";


// export const refreshAllCampaigns = () => {
//     let campaigns = []
//     console.log("Using the utils function")
//     axiosQuery.get("/api/campaign/getAll")
//     .then(({data})=>{
//         console.log(data);
//         return data
//     })
//     .catch((error)=>{
//         console.log("Error occured while getting all campaigns",error)
//     })
// }