import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    let result = {message: "connection successful"}
    res.status(200).send(result)
})

app.listen(port, ()=>{
    console.log("App listening on port " + port+"");
})