import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/essays', (req, res) => {
    res.render('essays.ejs', {
        items : essays,
        title : "Essays"
    });
});

app.get('/books', (req, res) => {
    res.render('books.ejs', {
        item : booksNames,
    });
});

app.post("/submit", (req, res) => {
    var blog = req.body['blog'];
    res.render("makeBlog.ejs", {
      madeblog : blog
    })
}); 



app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get('/essays', (req, res) => {
    res.render('essays.ejs');
})

app.get('/books', (req, res) => {
    res.render('books.ejs');
})

app.get('/submit', (req, res) => {
    res.render('makeBlog.ejs');
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

var essays = [
    'The Reddits',
    'How to Start Google',
    'The Best Essay',
    'Superlinear Returns',
    'How to Do Great Work',
    'How to Get New Ideas',
    'The Need to Read',
    'What You (Want to)* Want',
    "Alien Truth",
    "What I've Learned from Users",
    'Heresy',
    'Putting Ideas into Words',
    'Is There Such a Thing as Good Taste?',
    'Beyond Smart',
    'Weird Languages',
    'How to Work Hard',
    'A Project of Ones Own',
    'Fierce Nerds',
    'Crazy New Ideas',
    'An NFT That Saves, Lives',
    'The Real Reason to End the Death Penalty',
    'How People Get Rich Now',
    'Write Simply',
    'Donate Unrestricted',
    'What I Worked On',
    'Earnestness',
    'Billionaires ,Build',
    "The Airbnbs",
    "How to Think for Yourself"
]

var booksNames = [
    'Chhaava',
    'Shriman Yogi',
    'Mrutunjay'
]