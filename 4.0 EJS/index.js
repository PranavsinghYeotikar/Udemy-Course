import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    const today = new Date();
    const day = today.getDay();

    let Type = "weekday";
    let adv = "go work";

    if(day === 0 || day === 6){
        let Type = "weekend";
        let adv = "go do fun";
    }

    res.render("index.ejs", {
        dayType : Type,
        advice : adv
    })
})

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})