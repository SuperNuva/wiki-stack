const router = require('express').Router(); 

router.get('/', (req, res, next) => {
    res.redirect('/'); 
})

router.post('/', (req, res, next) => {
    console.log("request body: ", req.body);
    res.json(req.body);
})

router.get('/add', (req, res, next) => {
    res.render('addpage'); 
})

module.exports = router; 