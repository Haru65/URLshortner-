const {nanoid} = require("nanoid")
const url = require("../models/url")
async function HandlerURLGeneration(req,res){
    const ShortId = nanoid(8);
    const body = req.body;
    console.log(body)
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
async function HandlerReturnAll(req,res) {
    
    
   /*      // const ALLurls = await url.find()    
        // ALLurls.forEach((urls) => {
        //     URLS [url.ShortId,url.ShortUrl]= urls
            
        // console.log(urls)        
// }
// ); */
    const ALLurls = await url.find().select("-log")
    console.log(ALLurls)

    return res.json({ALLurls})
}
module.exports= {HandlerURLGeneration,HandlerRedirect,HandlerAnalytics,HandlerReturnAll}