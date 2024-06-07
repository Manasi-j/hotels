const express = require('express');
const router = express.Router();
const employees = require('./../models/employees');






router.post('/', async (req, res) => {
    try {
        const data = req.body// assuming that the body contains the employee data

        //create a new 
        const newEmp = new employees(data);

        //save the data to the database
        const response = await newEmp.save();
        console.log("data saved");
        res.status(200).json(response);



    } catch (err) {
        console.log(err);
        res.status(500).json(err, 'Internal server error');

    }


})

router.get('/', async (req, res) => {
    try {
        const data = await employees.find();
        console.log("data fatched");
        res.status(200).json(data);
    } catch (er) {
        res.status(500).json('Internal error');


    }

})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await employees.find({ work: workType });
            console.log("response fatched");
            res.status(200).json(response);

        } else {
            res.status(404).json('Record not found');

        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err, 'Internal server error');

    }

})


router.put('/:idOfemp', async (req,res) =>{
    try{
        const empId = req.params.idOfemp;
        const updatedData = req.body;
        
        const response = await employees.findByIdAndUpdate(empId, updatedData, {
            new: true,//return the updated document/record
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({erro: "Record Not found"});
        }

        console.log("now data is updated");
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json(err, 'Internal server error');


    }
})


router.delete('/:idToDel', async(req,res) =>{
    try{
        const id = req.params.idToDel;
        const response = await employees.findByIdAndDelete(id);
        
        if(!response){
            return res.status(404).json({error:'Record not deleted'});
        }

        console.log('Record deleted corrctly');
        res.status(200).json(response);
        
    }catch(error){
        console.log(error);
        res.status(500).json(err, 'Internal server error');
    }
} )
module.exports = router;