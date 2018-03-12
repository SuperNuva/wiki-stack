const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/', (req,res,next) => {
    res.send("Welcom to Wikistack!");
})

app.listen(3000, () => {
    console.log("Listening at port 3000!");
})