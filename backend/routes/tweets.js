var express = require('express');
var router = express.Router();

require('../models/connection');

const Tweet = require('../models/tweets');
const { checkBody } = require('../modules/checkBody');

router.post('/createTweet', (req,res) => {
    if (!checkBody(req.body, ['token','content'])) {
        res.json({ result: false, error: 'Missing or empty data' });
        return;
    }
    const newTweet = new Tweet({
        user: req.body.token,
        content: req.body.content,
        nbLike: 0,
        date: new Date(),
    });

    newTweet.save().then(() => {
        res.json({ result: true});
    });
})

router.get('/getTweets', (req,res) => {
    Tweet.find().then(data => res.json({tweets:data.sort((a,b) => b.date - a.date)})); //Sort du plus recent au plus vieux
})

router.get('/getTrending', (req,res) => {
    if (!checkBody(req.body, ['trend'])) {
        res.json({ result: false, error: 'Missing or empty data' });
        return;
    }
    Tweet.find({content : { $regex: new RegExp(req.body.trend, 'i') }}).then(data => {
        res.json({tweets:data})
    })
})

router.delete('/deleteTweet', (req,res) => {
    if (!checkBody(req.body, ['token','content'])) {
        res.json({ result: false, error: 'Missing or empty data' });
        return;
    }

    Tweet.deleteOne({user:req.body.token,content:req.body.content}).then(data => res.json(data))
})

module.exports = router;