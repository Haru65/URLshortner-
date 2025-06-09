const express = require('express');
const router = express.Router();
const { HandlerURLGeneration ,HandlerRedirect,HandlerAnalytics,HandlerReturnAll} = require('../controller/url');  // Ensure correct import
const url = require('../models/url');


//add the url in x-www-unicoded format to send in the body not in the header
router.post('/shorten', HandlerURLGeneration);

router.get("/api/",HandlerReturnAll)
router.get("/api/:ShortUrl",HandlerRedirect)
router.get("/analytics/:ShortUrl",HandlerAnalytics)


router.get("/test",async(req,res)=>{
    const ALLurls = await url.find({})
    console.log("Data passed to EJS:", ALLurls);

    return res.render("home",{
        ALLurls :ALLurls ,
})
})
module.exports = router;
