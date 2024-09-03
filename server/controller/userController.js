import userModels from "../models/userModels.js";
import User from "../models/userModels.js";

// Create a new user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ error: error.message });
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
        const id = req.params.id;  // Get the ID from the request parameters
        const updatedData = req.body;  // Get the new data from the request body

        // Find the user by ID and update with new data
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });  // If user is not found, return 404
        }

        res.status(200).json(user);  // Return the updated user data with status 200
    } catch (error) {
        return res.status(500).json({ error: error.message });  // Handle any errors
    }
};
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
