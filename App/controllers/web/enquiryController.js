const { Model } = require("mongoose");
const enquiryModel = require("../../models/enquiry.model");
let enquiryInsert=(req,res) => {
    let {name, email, phone, message}=req.body
    let enquiry = new enquiryModel ({
        name,
        email,
        phone,
        message
    });
    enquiry.save().then(()=> {
        res.send({status: 1, message: "Enquiry Saved Successfully"})
    }).catch((err)=>{
        res.send({status: 0, message: "Error while Saveing Enquiry", error: err})
    })
}

module.exports={enquiryInsert}