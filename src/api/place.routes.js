const express = require('express')
const router = express.Router()

router.get('/place', (req, res) => {
    res.send('List of place');
});
  
router.get('/place/:id', (req, res) => {
    const placeId = req.params.id;
    res.send(`Details of place ${placeId}`);
});
  
router.post('/place', (req, res) => {
    res.send('Create a new place');
});
  
router.put('/place/:id', (req, res) => {
    const placeId = req.params.id;
    res.send(`Update user ${placeId}`);
});
  
router.delete('/place/:id', (req, res) => {
    const placeId = req.params.id;
    res.send(`Delete user ${placeId}`);
});
  
module.exports = router;