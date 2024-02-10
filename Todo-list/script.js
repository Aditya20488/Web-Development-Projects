let inputbt = document.querySelector('#inputbt');
let list = document.querySelector('#list'); 

inputbt.addEventListener("keyup" , function(event){
  if(event.key == "Enter"){
    addItem(this.value)
    this.value = "" 
  }
})

let addItem = (inputbt) => {
  let listItem = document.createElement("li"); 
  listItem.innerHTML= `${inputbt}<i><i>`; 
  list.appendChild(listItem); 
}