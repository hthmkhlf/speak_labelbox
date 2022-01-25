var express = require('express');
const { route } = require('.');
var router = express.Router();
var User = require('../models/user')

/* GET Nasa Image and add it to database. */
router.get('/apod', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Create a new user
router.post('/user', async (req,res) => {
    const user = new User({
        email: req.body.email
    })
    
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }

})

// Delete a user
router.delete('/user/:id', getUser, async(req, res) => {
    try {
        await res.user.remove()
        res.json({message: 'User was successfully deleted'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// User middleware
async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({message: 'Unable to find user'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.user = user
    next()
}

module.exports = router;
