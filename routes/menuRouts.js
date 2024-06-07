const express = require('express');
const router = express.Router();
const menuItems = require('./../models/menu');


//get method
router.get('/' , async(req,res) => {
    try{
        const menuData = await menuItems.find();
        console.log('Data fatched from Menu');
        res.status(200).json(menuData);


    }catch(meuError){
        res.status(500).json(meuError ,'Internal error in while fatching Menu items');
    }

})

router.post('/',async(req,res)=>{
    try{
        const itemData = req.body// assuming that the body contains the employee data

        //create a new MenuItem object
        const item =  new menuItems(itemData);

        //save the data to the database of Menu
        const response = await item.save();

        console.log("data saved");
        res.status(200).json(response);



    }catch(err){
        console.log(err);
        res.status(500).json(err,'Internal server error while creating new record');

    }
   

})

router.get('/:tasteType',async (req,res) =>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet and sour' || tasteType == 'spicy' || tasteType == 'sweet'){
            const response = await menuItems.find({taste: tasteType})
            res.status(200).json(response);
            console.log("data fatched");

        }else{
            res.status(404).json('record of menu not found');
        }

    }catch(err){
        console.log(err);
        res.status(500).json(err,'Internal server error while creating new record');


    }

})

module.exports = router;