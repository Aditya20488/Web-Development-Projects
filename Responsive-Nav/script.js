
const togglebt = document.getElementsByClassName('togglebt')[0]
const centerDetails = document.getElementsByClassName('centerDetails')[0]

togglebt.addEventListener('click', ()=>{
    centerDetails.classList.toggle('active')
})