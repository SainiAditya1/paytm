const express = require("express");
const useRouter = require("./user");
const router = express.Router();


const app=express();
 router.use("/user", useRouter)

app.get("/", (req,res)=> {
    console.log("hello");
})




module.exports = router;