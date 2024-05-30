let text = document.getElementById("text_area");
let color = document.getElementById("color");
let btn = document.getElementById("buttons");
let notesContainer = document.getElementById("notes_container");
let para = document.getElementById("para");


function addNote(){
    if(text.value === ""){
        alert("please enter the text");
        return;
    }
    para.innerText="";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    //connecting div with p and button
    div.appendChild(p);
    div.appendChild(cross_btn);     

    cross_btn.innerText="X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;

    notesContainer.appendChild(div);
    text.value="";

    cross_btn.addEventListener("click", function(){
        div.style.display="none";
    })

}

btn.addEventListener("click", addNote);