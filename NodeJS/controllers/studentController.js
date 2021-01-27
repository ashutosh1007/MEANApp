const express = require('express');
var router  = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Student} = require('../models/student');

//=> localhost:3000/employees/
router.get('/', (req, res) =>{
    Student.find((err, docs) => {
        if(!err){ res.send(docs).status(200); } 
        else { console.log('Error in retrieving Student : ' +JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with this given id : ${req.params.id}`);
    Employee.findById(req.params.id, (err, doc) => {
       if(!err){ res.send(doc); }
       else{ console.log('Error in retrieving Student :' +JSON.stringify(err, undefined, 2)); } 
    });
});

router.post('/', (req, res) => {
    var student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roll_number: req.body.roll_number,
        email: req.body.email,
        subject_details: req.body.subjectDetails
    });
    student.save((err, doc) => {
        if(!err){ res.send(doc); }
        else { console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
    }); 
});

module.exports = router;