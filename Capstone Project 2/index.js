import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get('https://random.dog/woof.json');
        const jokeCont = await axios.get('https://api.chucknorris.io/jokes/random');
        res.render('index.ejs', { 
            dog: result.data.url,
            joke: jokeCont.data.value
        });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).send("Error fetching the image.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

