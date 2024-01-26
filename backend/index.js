const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");
const app=express();
app.use(cors());
app.use(express.json());
const port=3000;

// app.get("/", (req,res)=> {
//     console.log("hello");
// })

app.use("/api/v1", rootRouter);


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})

