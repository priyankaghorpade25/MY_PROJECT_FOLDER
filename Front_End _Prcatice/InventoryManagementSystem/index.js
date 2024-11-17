import express from 'express';
import projectController from './src/controller/product.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import validationRequest from './src/middlewares/validation-middleware.js';
import { uploadFile } from './src/middlewares/update-product.middleware.js';
import UserController from './src/controller/user.controller.js';
import session from 'express-session';
import {auth} from "./src/middlewares/auth.middleware.js"
import cookieParser from "cookie-parser";
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';

// create an object to use controller functions
const projController = new projectController();
const userController = new UserController();

//create server using express
export const server = express();

// telling our system that we are using EJS template engine and it's layout
server.set('view engine','ejs');
server.set('views', path.join(path.resolve(),'src','view'));
server.use(ejsLayouts);
server.use(express.static("public"));

// received data is in encoded format and that is handeld here
server.use(express.urlencoded({ extended: true }));
server.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

server.use(cookieParser());
server.use(setLastVisit);



// create routes for calls
server.get('/',auth,projController.getProduct);
server.get('/new',auth,projController.getAddForm);
server.post('/',uploadFile.single('imageUrl'),validationRequest,projController.addNewProduct);
server.get('/update-product/:id',auth,projController.getUpdateProduct);
server.post('/update-product',auth,projController.postUpdateProduct);
server.get('/delete-product/:id',projController.deleteProduct);
server.get("/register",userController.getRegister);
server.post('/register',userController.postRegister);
server.get('/login',userController.getLogin);
server.post('/login',userController.postLogin);
server.get('/logout', userController.logout);

// listen the server
