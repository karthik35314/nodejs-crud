
module.exports =  (req,res,next,err) =>{
    if (req.cookies.emp){
    
      res.redirect("/id")
        next(err)
    }else{
    
        res.redirect("/")
    }
  }