const reset = document.querySelector("#reset");
const redo = document.querySelector("#redo");
const undo = document.querySelector("#undo");
const wrapper = document.querySelector("#wrapper");

import colors from "./index.js";
console.log(colors);


const  arr1=[]
const arr2=[]

function RandomColor() {
  return Math.floor(Math.random() * colors.length);
}

wrapper.addEventListener("click", function (event) {
  const para = document.createElement("p");
  para.className = "para";
  
//   para.style.backgroundColor="red"
  
  const x = event.pageX;
  const y = event.pageY;
  
  para.style.left = `${x - 8}px`;
  para.style.top = `${y - 70}px`;
  wrapper.appendChild(para);
  arr1.push(para)
//   arr1=[];
//   console.log(arr1);


  const colorChange=colors[RandomColor()];
  console.log(colorChange);
  para.style.backgroundColor=colorChange.backgroundColor

  reset.disabled=false;
  undo.disabled=false;
  redo.disabled=true;


});

reset.addEventListener("click",function(){
  wrapper.innerHTML=""
  reset.disabled=true;
  undo.disabled=true;
  redo.disabled=true;
    
  })
  
  undo.addEventListener("click",function(){
    if(arr1.length>0){
      const lastDot=arr1.pop();
      wrapper.removeChild(lastDot)
      arr2.push(lastDot)
      reset.disabled=false;
      undo.disabled=false;
      redo.disabled=false;
    }
    
})

redo.addEventListener("click",function(){
    if(arr2.length>0){
        const redoDot=arr2.pop();
        wrapper.appendChild(redoDot) 
        arr1.push(redoDot)
        reset.disabled=false;
        undo.disabled=false;
        redo.disabled=false;
    }
})


