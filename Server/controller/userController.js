import User from "../model/userModel.js"



export const create = async (req,res)=>{
    try {

        const userData = new User(req.body)

        if(!userData){
            res.status(404).json({msg:"User data not found"})
        }

        const saveData = await userData.save();

        res.status(200).json("User Created Successfully");

    }catch(err){
        res.status(500).json({message:err.message})
        }
   }

export const getAll = async (req,res)=>{
    try{

        const userData = await User.find();

        if(!userData){
            res.status(404).json({msg:"User data not found"})
        }

          res.status(200).json(userData);

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getOne = async(req,res)=>{
    try{
      
        const id = req.params.id;

        const userExist = await User.findById(id);

        if(!userExist){
            res.status(404).json({msg:"User data not found"})
            }
       
         res.status(200).json(userExist)
    }
    catch(error){
        res.status(500).json({message:error.message})
        }
}


export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        
        const userExist = await User.findById(id)

        if(!userExist){
            res.status(404).json({msg:"User data not found"})

        }

        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})
        

         res.status(200).json("User Updated Successfully")

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const deletee = async(req,res)=>{

    try{
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            res.status(404).json({msg:"User data not found"})
            }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted successfully"})

    }catch(error){
        res.status(500).json({message:error.message})
    }
}