import userModels from "../models/userModels.js";
import User from "../models/userModels.js";

// Create a new user
export const create = async (req, res) => {
    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        await userData.save();
        res.status(200).json({msg: "User created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
};

export const view = async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).json(userData); 
    } catch (error) {
        return res.status(500).json({ error: error.message });  
    }
};

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;  
        const user = await User.findById(id);  

        if (!user) {
            return res.status(404).json({ msg: "User not found" }); 
        }

        res.status(200).json(user);  
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);

        if (!userExists) {
            return res.status(401).json({ msg: "User not found" });
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({msg: "User updated successfully"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req,res) => {
    try {
            const id = req.params.id;
            const userExists =  await User.findById(id);
            if(!userExists) {
                    return res.status(404).json({ msg: 'user not exits'});
            }
            await User.findByIdAndDelete(id);

            res.status(200).json({msg: 'user delete succesfully'});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// export const viewByEmail = async (req, res) => {
//     try {
//         const email = req.params.email;  // Get the email from the request parameters
//         const user = await User.findOne({ email: email });  // Find the user by email

//         if (!user) {
//             return res.status(404).json({ msg: "User not found" });
//         }

//         res.status(200).json(user);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };
