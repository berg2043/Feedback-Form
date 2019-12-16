const express = require('express');
const router = express.Router();
const pool = require('./../modules/pool')

// GETS feedback from database
router.get('/', (req,res)=>{
  const queryText = `SELECT * FROM "feedback" ORDER BY id;`;
  pool.query(queryText).then(result=>{
    res.send(result.rows);
  }).catch(err=>{
    console.log('ERROR IN POSTING FEEDBACK',err);
    res.sendStatus(500);
  });
});

// DELETES feedback from database
router.delete('/:id', (req,res)=>{
  const id = req.params.id
  const queryText = `DELETE FROM "feedback" WHERE id = $1;`;
  pool.query(queryText,[id]).then(result=>{
    res.sendStatus(200);
  }).catch(err=>{
    console.log('ERROR IN POSTING FEEDBACK',err);
    res.sendStatus(500);
  });
});

// PUTS feedback on the database
router.put('/:id', (req,res)=>{
  const id = req.params.id
  const queryText = `UPDATE "feedback" SET flagged = true WHERE id = $1;`;
  pool.query(queryText,[id]).then(result=>{
    res.sendStatus(200);
  }).catch(err=>{
    console.log('ERROR IN POSTING FEEDBACK',err);
    res.sendStatus(500);
  });
});

// POSTS feedback to database
router.post('/', (req,res)=>{
  const {
    feeling,
    understanding,
    support,
    comments
  } = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4);`;
  pool.query(queryText,[feeling, understanding, support, comments]).then(result=>{
    res.sendStatus(201);
  }).catch(err=>{
    console.log('ERROR IN POSTING FEEDBACK',err);
    res.sendStatus(500);
  });
})

module.exports = router;