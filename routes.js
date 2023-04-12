const express = require('express');
const router = express.Router();

const home = require('./src/controllers/home.js');

router.get('/', home.index);
router.post ('/', home.add);


module.exports = router;
