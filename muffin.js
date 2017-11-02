var muffinCount = 10;

var eat = document.querySelector('#eat');
var bake = document.querySelector('#bake');
 
eat.addEventListener('click', function(event){
   
    if ( muffinCount <= 0){
        header.innerText= "Shit Out Of Luck! No More Muffins "
    } else {
    muffinCount -= 1
    header = document.querySelector("h1")
    header.innerText= "Muffin Count: " + muffinCount
    }
    
})
bake.addEventListener('click', function(event){
    
    muffinCount += 5
    header = document.querySelector("h1")
    header.innerText= "Muffin Count: " + muffinCount
})
window.localStorage.setItem('header', header.innerText)