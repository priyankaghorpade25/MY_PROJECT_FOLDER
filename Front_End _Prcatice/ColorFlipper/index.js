console.log("Inside Js File");
const colorArray=['red', 'yellow', 'blue', 'red', 'white', 'black','green'];


const clickButton=document.getElementById("clickButton");
const body=document.body;
const backGroundColorName=document.getElementById("bg-colorname");


clickButton.addEventListener("click",()=>{
    const randomColor=Math.floor(Math.random()*colorArray.length)
    const result=colorArray[randomColor];
    console.log(result);

    body.style.backgroundColor=result;
    backGroundColorName.textContent=`BackGround Color: ${result}`;
})

