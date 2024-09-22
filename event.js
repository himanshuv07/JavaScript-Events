let btn = document.querySelector(".btn")
let div = document.querySelector(".container")

// btn.onclick = () => {
//     console.log("button was clicked");
    // let a=20;
    // a++;
    // console.log(a);
    
//     div.style.backgroundColor ="red" //? Changing DIv COLOR .........
//     console.log(div);
// }

//& It Overwrites the old events ..............

div.onmouseover = () => {
    console.log("Inside the div");
    console.log(a);
    
    div.style.backgroundColor ="green" //? Changing Div COLOR .........
    console.log(div);
}

div.onmouseout = () => {
    console.log("Outside the div");
    console.log(a);
    
    div.style.backgroundColor ="yellow" //? Changing DIv COLOR .........
    console.log(div);
}

//^ Event Object ..................

//& Event Handler Property ....

// let btn = document.querySelector(".btn")

// btn.onclick = (e) => {
//     console.log("button was clicked");
    // console.log(e); //? Print the targeted element ........(button)
    // console.log(e.type); //? print the type .........(click)
    // console.log(e.target);   
// }

//& addEventListener Property .........

// btn.addEventListener("click", () => {
//     console.log("btn1 clicked");
//     btn.style.backgroundColor="red"
// })
// btn.addEventListener("click", () => {
//     console.log("btn2 clicked");
//     btn.style.backgroundColor="green"  //? It overwrites the red color ....
// })
// let handler3 = () => {
//     console.log("btn3 clicked");
// }
// btn.addEventListener("click",handler3)

// btn.addEventListener("click", () => {
//     console.log("btn4 clicked");
// })

// //^ How to Remove btn3 .......

// btn.removeEventListener("click",handler3) //? Now the btn3 was removed .....