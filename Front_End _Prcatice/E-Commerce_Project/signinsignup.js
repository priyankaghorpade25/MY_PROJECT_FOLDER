const signInEmail=document.getElementById("signinemail");
const signInpassword=document.getElementById("signinpassword");
const signUpEmail=document.getElementById("signupemail");
const signUppassword=document.getElementById("signuppassword");
const confirmpassword=document.getElementById("confirmpassword")


if(signUppassword.target.value==confirmpassword.target.value){
    console.log("added");
    
}
else{
    localStorage.setItem("password",signUppassword.target.value);
}

const data=localStorage.getItem("password");
data.forEach((d)=>{


    if(signInpassword.target.value==d.password  && signInEmail.target.value==d.email){
        console.log("logged in")
        
    }
    

})

