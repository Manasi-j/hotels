const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    taste : {
        type : String,
        enum :['sweet','sour','sweet and sour','spicy']
   },
    is_drink : {
        type : Boolean
    },
    ingredients : {
        type :[String],
        default : []
    },
    num_sales : {
        type : Number,
        default : 0
    }


});


//Now creating a model from that 
const menuItems = mongoose.model('menuItems',menuItemsSchema);

//exporting

module.exports = menuItems;

