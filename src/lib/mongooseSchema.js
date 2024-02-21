const { default: mongoose } = require("mongoose");

 const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    job:{
        type: String,
        required: true,
    }
},{timestamps: true})

export const UserModel = mongoose.models.users || mongoose.model("users", userSchema);