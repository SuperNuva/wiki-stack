const express = require('express')
const app = express();
const nunjucks = require('nunjucks'); 

const env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(express.static('public'));
app.use(express.static('views')); 

const models = require('./models');
const routes = require('./routes'); 

app.use(routes); 
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
