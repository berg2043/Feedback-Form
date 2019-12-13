const express = require('express');
const router = express.Router();
const pool = require('./../modules/pool')

// POSTS feedback to database
router.post('/', (req,res)=>{
  console.log(req.body);
  const {
    feeling,
    understanding,
    support,
    comments
  } = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4);`;
  console.log(queryText)
  pool.query(queryText,[feeling, understanding, support, comments]).then(result=>{
    res.sendStatus(201);
  }).catch(err=>{
    console.log('ERROR IN POSTING FEEDBACK',err);
    res.sendStatus(500);
  });
})

module.exports = router;