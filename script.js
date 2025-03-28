const reset = document.querySelector("#reset");
const redo = document.querySelector("#redo");
const undo = document.querySelector("#undo");
const wrapper = document.querySelector("#wrapper");

const colors = [
  { backgroundColor: "black" },
  { backgroundColor: "white" },
  { backgroundColor: "yellow" },
  { backgroundColor: "red" },
  { backgroundColor: "purple" },
  { backgroundColor: "green" },
  { backgroundColor: "blue" },
  { backgroundColor: "orange" },
  { backgroundColor: "brown" },
  { backgroundColor: "pink" },
  { backgroundColor: "gray" },
  { backgroundColor: "violet" },
  { backgroundColor: "aqua" },
  { backgroundColor: "silver" },
  { backgroundColor: "teal" },
  { backgroundColor: "turquoise" },
  { backgroundColor: "tan" },
  { backgroundColor: "lavender" },
  { backgroundColor: "maroon" },
  { backgroundColor: "olive" },
  { backgroundColor: "navy" },
];

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
  
  para.style.left = `${x - 10}px`;
  para.style.top = `${y - 30}px`;
  wrapper.appendChild(para);
  arr1.push(para)
//   arr1=[];
//   console.log(arr1);


  const colorChange=colors[RandomColor()];
  console.log(colorChange);
  para.style.backgroundColor=colorChange.backgroundColor


});

reset.addEventListener("click",function(){
    wrapper.innerHTML=""

})

undo.addEventListener("click",function(){
     if(arr1.length>0){
        const lastDot=arr1.pop();
        wrapper.removeChild(lastDot)
        arr2.push(lastDot)
     }
})

redo.addEventListener("click",function(){
    if(arr2.length>0){
        const redoDot=arr2.pop();
        wrapper.appendChild(redoDot)
        arr1.push(redoDot)
    }
})


