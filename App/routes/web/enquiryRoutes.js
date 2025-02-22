let express=require("express");
const { enquiryInsert } = require("../../controllers/web/enquiryController");
let enquireyRoute=express.Router();


enquireyRoute.post("/insert", enquiryInsert)



module.exports=enquireyRoute;
