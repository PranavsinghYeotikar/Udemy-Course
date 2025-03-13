import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello this is homepage");
})

app.get("/about", (req, res)=>{
    res.send("Hello this is about page");
})

app.get("/contact", (req, res)=>{
    res.send("This is contact page");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});