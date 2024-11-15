require("dotenv").config

const Authenticate= (req,res, next)=>{
    const {key}= req.headers;
    if(!key || process.env.KEY!=key){
        console.log('Authentication failed');
        return res.status(401).json({msg:"not Authorization"});
    }
    next();
}

module.exports= Authenticate;