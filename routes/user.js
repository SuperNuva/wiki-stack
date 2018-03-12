const router = require('express').Router(); 

router.get('/', (req, res, next) => {
    res.send("should get all users"); 
}); 

router.get('/123', (req, res, next) => {
    res.send('should get user 123'); 
}); 

router.post('/', (req, res, next) => {
    res.send('should create a user'); 
}); 

router.put('/123', (req, res, next) => {
    res.send('should edit a user'); 
}); 

router.delete('/123', (req, res, next) => {

}); 

module.exports = router; 