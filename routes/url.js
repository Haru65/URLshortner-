const express = require('express');
const router = express.Router();
const { HandlerURLGeneration ,HandlerRedirect,HandlerAnalytics} = require('../controller/url');  // Ensure correct import

router.post('/shorten', HandlerURLGeneration);
router.get("/:ShortUrl",HandlerRedirect)
router.get("/analytics/:ShortUrl",HandlerAnalytics)

module.exports = router;
