const router = require('express').Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User; 
 

router.get('/', (req, res, next) => {
    res.redirect('/'); 
})

router.post('/', (req, res, next) => {
    const page = Page.build({
        title: req.body.title,
        content: req.body.content
      });
      page.save().then(function (resolve, reject) {
        resolve(res.redirect('/'));
      });
    
    // console.log("request body: ", req.body);
    // res.json(req.body);
    // res.redirect('/')
})

router.get('/add', (req, res, next) => {
    res.render('addpage'); 
})

module.exports = router; 