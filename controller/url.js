const {nanoid} = require("nanoid")
const url = require("../models/url")
async function HandlerURLGeneration(req,res){
    const ShortId = nanoid(8);
    const body = req.body;
    if( !body.url ) return res.json({error:"url needed"}).status(400) 
    url.create({
        ShortUrl:ShortId,
        RedirectedUrl:body.url,
        log:[]
        
    }
    )
    return res.json({id:ShortId})
}

async function HandlerRedirect(req,res){
    const ShortUrl = req.params.ShortUrl;
    const entry = await url.findOneAndUpdate({
        ShortUrl
    },
    {
        $push:{
            log:{
                timestamp:Date.now()
            }
        }
    }
    
);
if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
}
res.redirect(entry.RedirectedUrl)
}


async function HandlerAnalytics(req,res) {
    const ShortUrl = req.params.ShortUrl;
    const result  = await url.findOne({ShortUrl}) 

    return res.json({totalClicks:result.log.length,analytics:result.log})
    
}

module.exports= {HandlerURLGeneration,HandlerRedirect,HandlerAnalytics}