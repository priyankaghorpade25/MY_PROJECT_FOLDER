import express, { urlencoded } from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import { lastVisit } from "./src/middleware/lastVisitMiddleware.js";
import cookieParser from "cookie-parser";
import JobControl from "./src/controller/job.controller.js";
import uploadFile from "./src/middleware/fileUploadMiddleware.js";
import UserController from "../Job_Portal/src/controller/user.controller.js"
import { auth } from "./src/middleware/authMiddleware.js";


const userController= new UserController();



const server = express();
const jobController = new JobControl();

server.use(cookieParser());
server.use(lastVisit);
server.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
server.use(express.json());
server.use(express.static(path.resolve("src", "public")));
server.use(urlencoded({ extended: true }));
server.use(expressLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));
server.set("layout", path.resolve("src", "views", "layouts", "layout"));
// server.use(jobRouter);
// server.use(userRouter);


//server routes for user

server.get("/login",userController.getLogin);
server.post("/addjob",userController.postLogin)
server.get("/register",userController.getRegister);
server.get("/logout",userController.logout);


server.get("/",lastVisit,jobController.renderHomePage);
server.get("/jobs",jobController.getJobs);
server.get("/job/:id",jobController.findJobById);
server.get("/postjob",jobController.renderJobForm);
server.get("/job/applicants/:id",auth, jobController.allApplicants);
server.get("/job/update/:id",auth, jobController.renderUpdateform);

// post routes
server.post("/job",jobController.newjob);
server.post("/apply/:id",uploadFile.single("resume"), jobController.newApplicant);
server.post("/job/update/:id",auth, jobController.updateJobById);

// delete route
server.get("/job/delete/:id",auth, jobController.deleteJob);

















export default server;
