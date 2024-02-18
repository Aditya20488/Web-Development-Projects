const hex_bt = document.getElementById('hex-bt'); 
const rgb_bt = document.getElementById('rgb-bt'); 

function RandomHex(){
    var color = "0123456789ABCDEF";
    var hexcolor = "#"; 
    for(var i = 0 ; i<6 ; i++){
        var randomInd = Math.floor(Math.random()*color.length); 
        hexcolor += color.charAt(randomInd) ; 
    }
    return hexcolor ;

}
// console.log(RandomHex()); 

function RandomRgb(){
    const r = Math.floor(Math.random()*256); 
    const g = Math.floor(Math.random()*256); 
    const b = Math.floor(Math.random()*256); 
    return `rgb(${r} , ${g} , ${b})` ; 
}

hex_bt.addEventListener('click',function(){
    const randomhexcolor = RandomHex(); 
    document.body.style.backgroundColor = randomhexcolor ; 
})

rgb_bt.addEventListener('click',function(){
    const randomrgbcolor = RandomRgb(); 
    document.body.style.backgroundColor = randomrgbcolor ; 
})