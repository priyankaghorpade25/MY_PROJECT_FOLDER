// Get the button element by its ID
const add = document.getElementById("addDetails");

// Add click event listener to the button
let check=true;
add.addEventListener('click', () => {
    // Create new elements for the list item
    const list = document.createElement("div");
    if(check){
        list.classList.add("forwhite");

    }
    else{
        list.classList.add("forgray");
    }
    
    const roll = document.createElement("span");
    const name = document.createElement("span");
    const marks = document.createElement("span");
    
    
    // Get input values
    const rollValue = document.getElementById("rollInput").value;
    const nameValue = document.getElementById("nameInput").value;
    const marksValue = document.getElementById("markInput").value;
    //console.log(rollValue);
    
    // Set text content for each span
    roll.innerHTML = `Roll No-<span class="Resstyle"> ${rollValue} </span> ,`;
    //roll.style.color="green";
    name.innerHTML = `<span class="Resstyle"> ${nameValue} </span>  has scored`;
    marks.innerHTML = `<span class="Resstyle"> ${marksValue} </span>  marks`;
   
    const result = document.getElementById("list");
    
    if(rollValue && nameValue&& marksValue){
        list.append(roll, name, marks);
    
        // Append the list item to the result container
        result.appendChild(list);
        
        // Optionally clear input fields after adding the details
        document.getElementById("rollInput").value = '';
        document.getElementById("nameInput").value = '';
        document.getElementById("markInput").value = '';
    }
    else{
        alert("Please fill all section")
    }
    check=!check;
   
   
});