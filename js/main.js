let search = document.getElementById('search');
let searchI = document.getElementById('searchI');
let cartContainer = document.getElementById('cartContainer');
let cart = document.getElementById('cart');
let parent = document.getElementById('parent');
let closs = document.getElementById('closs');

searchI.onclick = function(){
    if(search.value === ''){
        search.focus()
    }
}
cart.onclick = function(){
    cartContainer.style.right = '0';
    parent.style.display = 'block';
}
closs.onclick = function(){
    cartContainer.style.right = '-100%';
    parent.style.display = 'none';
}
parent.onclick = function(){
    cartContainer.style.right = '-100%';
    parent.style.display = 'none';
}