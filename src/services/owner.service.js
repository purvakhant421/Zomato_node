const  { Owner } = require("../models");

/* create Owner */
const createOwner = async (reqBody)=>{
       return Owner.create(reqBody)
};

/* Owner list */
const getOwnerList  =async (req ,res) =>{
       return Owner.find()
};

/* upadte Owner */
const updateOwner = async (ownerId , updateBody)=>{
    return Owner.findByIdAndUpdate(ownerId ,{ $set  : updateBody})
};

/* delete Owner */
const deleteOwner =async (ownerId) =>{
     return Owner.findByIdAndDelete (ownerId)
};

/* find Owner */
const findEmail =async (email) =>{
      return Owner.findOne({email});
}

module.exports ={
    createOwner,
    getOwnerList,
    updateOwner,
    deleteOwner,
    findEmail,
}