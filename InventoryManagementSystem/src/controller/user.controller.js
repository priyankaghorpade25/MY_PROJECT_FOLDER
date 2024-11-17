import UserModel from "../model/user.model.js";
import productModel from "../model/product.model.js";
export default class UserController{
    getRegister(req,res){
        
        res.render("register",
            {userEmail:req.session.userEmail});
     
    }
    postRegister(req,res){
        console.log(req.body);
        const{name,email,password}=req.body;
        UserModel.addUser(name,email,password);
        res.render("login",{errormessage:null,
            userEmail:req.session.userEmail})
        console.log("render done")

    }
    getLogin(req,res){
        res.render("login",{errormessage:null,
            userEmail:req.session.userEmail});
    }
    postLogin(req,res){
        
        const {email,password}=req.body;
        const result= UserModel.isValid(email,password);
        
        if(!result){
            return res.render("login",{errormessage:"Invalid Credentials",
                userEmail:req.session.userEmail});
        }
        req.session.userEmail=email;
        console.log(req.session.userEmail);
        let products=productModel.getAll();
        
        res.render("index",{products,
            userEmail:req.session.userEmail});
       
    }
    logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
            let products=productModel.getAll();
            res.render("login",{errormessage:null}); // Redirect to the home or login page
        });
    }
}