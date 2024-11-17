import UserModel from "../model/user.model.js"
import JobController from "../../../Job_Seeker_Portal/src/controller/job.controller.js";
import JobModel from "../../../Job_Seeker_Portal/src/model/job.model.js";
export default class UserController{
    
    getRegister(req,res){
        
        res.render("register");
     
    }
    postRegister(req,res){
        console.log(req.body);
        const{name,email,password}=req.body;
        UserModel.addUser(name,email,password);
        res.render("login",{errormessage:null})
        console.log("render done")

    }
    getLogin(req,res){
        res.render("login",{errormessage:null});
    }
    postLogin(req,res){
        
        const {email,password}=req.body;
        const result= UserModel.isValid(email,password);
        
        if(!result){
            return res.render("login",{errormessage:"Invalid Credentials"});
        }
        req.session.userEmail=email;
        userEmail:req.session.userEmail
       
        res.render("index",{userEmail:req.session.userEmail});
       
    }
    
    logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
            req.clear(cookie);        
            res.render("login",{userEmail:req.session.userEmail}); // Redirect to the home or login page
        });
    }
}