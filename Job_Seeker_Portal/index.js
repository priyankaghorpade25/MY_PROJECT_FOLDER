import express from "express";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import ejsLayouts from "express-ejs-layouts";
import UserController from "../Job_Portal/src/controller/user.controller.js"
import JobController from "./src/controller/job.controller.js";
import JobModel from "./src/model/job.model.js";
import { auth } from "./src/middleware/auth.middleware.js";

const userController= new UserController();
const jobController=new JobController();

export const server = express();

server.set("view engine", "ejs");
server.set("views",path.join(path.resolve(),"src","view"));
server.use(express.static(path.join(path.resolve(),"public")));
server.use(ejsLayouts);


server.use(express.urlencoded({ extended: true })); 
server.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

server.get("/",userController.getHome);
server.get("/login",userController.getLogin);
server.post("/addjob",userController.postLogin)
server.get("/register",userController.getRegister);
server.get("/addjob",jobController.getjobform);
server.get("/job",jobController.getJob);
server.post("/job",jobController.getaddNewJob)
server.get('/update/:id', jobController.getUpdateForm);
server.post("/update",jobController.postUpdate);




