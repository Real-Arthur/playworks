const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    
    const queryString = `
    SELECT "photos".id, "photos".file_url, challenges.name, challenges.description, "user".username, "user".image_path  FROM "user"
    JOIN "photos" ON "photos"."user_id" = "user"."id"
    JOIN "challenges" ON "challenges"."id" = "photos"."challenges_id"
    GROUP BY "photos".id, "photos"."file_url", challenges.name, challenges.description, "user".username, "user".image_path
    ORDER BY "photos".id DESC
    `
    pool.query(queryString)
    .then(response => {    
      res.send(response.rows);
    })
    .catch(error => {
      res.status(500);
    })
  });

  module.exports = router;