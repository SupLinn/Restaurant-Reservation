import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required : true,
        minLength : [3, "First name must contain atleast 3 characters."],
        maxLength : [30, "First name must not exceed 30 characters."],

    },
    lastName :{
        type : String,
        required : true,
        minLength : [3, "Last name must contain atleast 3 characters."],
        maxLength : [30, "Last name must not exceed 30 characters."],
        
    },
    email : {
        type : String,
        required : true,
        unique : true, 
        validate : [validator.isEmail, "Please provide a valid email!"]
    },

    phone : {
        type : String,
        required : true,
        unique : true,
        minLength : [10, "phone number must contain 10 digits."],
        maxLength : [10, "phone number must contain 10 digits."]
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }

})

export const Reservation = mongoose.model('Reservation',reservationSchema)