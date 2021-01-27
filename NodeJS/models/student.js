const mongoose = require('mongoose');

var Student = mongoose.model('student_details', {
    first_name: { type: String},
    last_name: { type: String},
    roll_number: { type: Number},
    email: { type: String},
    subject_details: [
        {
            "id": Number,
            "subject":  String,
            "marks": Number
        }
    ]
});

module.exports = {Student};