const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/', (req,res,next) => {
    res.send("Welcom to Wikistack!");
})

const models = require('./models');


// models.db.sync({force: true})

// models.db.sync()
// .then(function () {
//     console.log('All tables created!');
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error.bind(console));

models.User.sync({force: true})
.then(function () {
    console.log('User table created!');
    return models.Page.sync({force: true});
})
.then(function () {
    console.log('Page table created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));
