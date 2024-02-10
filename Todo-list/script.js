let inputbt = document.querySelector('#inputbt');
let list = document.querySelector('#list'); 
let addbt = document.querySelector('#addbt');


addbt.addEventListener("click" , function(){
  if(inputbt.value.trim() != ''){
    addItem(inputbt.value.trim());
    inputbt.value = '' ; 
  }
}) ; 
inputbt.addEventListener("keyup" , function(event){
  if(event.key == "Enter"){
    addbt.click(); 
  }
});

let addItem = (inputbt) => {
  let listItem = document.createElement("li"); 
  listItem.innerHTML= `${inputbt}<button class="remove-button">Remove</button>`; 

  listItem.addEventListener("click" , function(event){
    if (event.target.classList.contains('remove-button')) {
      this.remove(); 
    } else {
      this.classList.toggle('done'); 
    }
  })

  list.appendChild(listItem); 
}
