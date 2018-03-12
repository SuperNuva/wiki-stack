const router = require('express').Router(); 
const userRouter = require('./user.js'); 
const wikiRouter = require('./wiki.js'); 

router.use('/wiki', wikiRouter); 
router.use('/users', userRouter); 

router.get('/', (req, res, next) => {
    res.send("here's the homepage"); 
})

module.exports = router; 