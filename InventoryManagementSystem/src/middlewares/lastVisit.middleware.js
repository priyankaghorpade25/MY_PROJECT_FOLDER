export const setLastVisit=(req,res,next)=>{
    if(req.cookies.lastVisit){
        // res.locals.lastVisit=new Date(req.cookies.lastVisit).toLocaleDateString();
        // console.log(res.locals.lastVisit);
        
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleDateString();
        console.log(res.locals.lastVisit); // Log for debugging

    }
    res.cookie('lastVisit',new Date().toISOString(),{maxAge:2 * 24 * 60 * 60 * 1000});
    next();

}

    
    