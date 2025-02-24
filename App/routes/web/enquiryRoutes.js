let express=require("express");
const { enquiryInsert, enquiryList, enquiryDelete, enquirysingleRow } = require("../../controllers/web/enquiryController");
let enquireyRoute=express.Router();


enquireyRoute.post("/insert", enquiryInsert)

enquireyRoute.get("/view", enquiryList)

enquireyRoute.delete("/delete/:id", enquiryDelete)

enquireyRoute.get("/single/:id", enquirysingleRow)


module.exports=enquireyRoute;
