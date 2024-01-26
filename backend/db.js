
const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://adityasaini10012001:D6dmC6rVgOE9IfuF@cluster0.wfmxk5c.mongodb.net/")
.then(()=> {
    console.log("database connected");
})

const userSchema = mongoose.Schema({
    usename: {
        type:String,
        required: true,
        unique:true,
        trim:true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    password: {
    type:String,
    required: true,
    minLength:6
    },
    firstName: {
        type:String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    
    } 
});

const user = mongoose.model('User', userSchema);

module.exports = {
    user
};

