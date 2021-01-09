const express = require('express')
const fetch = require("node-fetch");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const arr = []


app.get('/subreddit/:name', (req, res) => {
    const {name} = req.params;

    fetch(`https://www.reddit.com/r/${name}/top.json`).then(response => response.json())
        .then(data => {
            data.data.children.map((sub, i) => {arr.push(
                key = i,
                title = sub.data.title,
                url = sub.data.url)
            })
        }).then(subs => {
        if (arr.length) {
            res.status(200).json(arr)
        } else {
            res.status(400).json('Not found')
        }
    })
        .catch(err => res.status(400).json('error getting user'))
})

app.listen(3001);


