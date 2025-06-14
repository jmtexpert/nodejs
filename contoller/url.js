const URLschema = require("../model/url")
const shortid = require('shortid');
async function UrlSubmit(req, res) {
    try {
        const userId = req.user.id;
        
        
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).send("URL is missing");
        }
        const shortId = shortid()

        const newUrl = await URLschema.create({ url,shortId ,userId: userId });
        console.log(newUrl);
        
        return res.redirect('/');
    } catch (error) {
        console.error("Error creating URL:", error);
        return res.status(500).send("Internal Server Error");
    }
}

async function GotoLink(req, res) {
    console.log("Route Params:", req.params);

    try {
        const shortId = req.params.shortId;

        const urlDoc = await URLschema.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        console.log("Matched Document:", urlDoc);

        if (!urlDoc) {
            return res.status(404).send("Short URL not found");
        }

        let redirectUrl = urlDoc.url;
        if (!/^https?:\/\//i.test(redirectUrl)) {
            redirectUrl = "https://" + redirectUrl;
        }

        return res.redirect(redirectUrl);
    } catch (error) {
        console.error("Error in GotoLink:", error);
        return res.status(500).send("Internal Server Error");
    }
}


async function DeleteUrl(req,res){
    const id = req.params.id
    if (!id) {
        res.send('Insert ID')
    }
    const data = await URLschema.findByIdAndDelete({_id:id})
    if (!data) {
         res.send('Invalid Id')
    }
    res.redirect('/')

}

async function Analyticsdata(req, res) {
    try {
        const shortId = req.params.id;

        const data = await URLschema.findOne({ shortId });

        if (!data) {
            return res.status(404).send("Short URL not found");
        }

        const visitCount = data.visitHistory.length;

        return res.status(200).send({ visitCount });
    } catch (error) {
        console.error("Error in Analyticsdata:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports= {
    UrlSubmit,
    GotoLink,
    Analyticsdata,
    DeleteUrl
};
