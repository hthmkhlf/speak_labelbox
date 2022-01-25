var express = require('express');
const { route } = require('.');
var router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var User = require('../models/user')
var Nasa = require('../models/nasa_image');
const { response } = require('express');

/* GET Nasa Image and add it to database. */

router.get('/apod', async (req, res) => {

    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    try {
            const response = await fetch(url);
            const json = await response.json();
            const nasa = new Nasa({
                url: json.url,
                title: json.title,
                description: json.explanation
            })

            const newImage = await nasa.save()
            res.status(201).json(nasa)
    } catch (error) {
        res.status(400).json({message: error.message})

    }
})

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
