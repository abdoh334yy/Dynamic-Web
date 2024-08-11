let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('m3');
let mountains4 = document.getElementById('m4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nuts = document.querySelector('.nuts');
window.onscroll = function() {
    let value = scrollY ;
    stars.style.left = value + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value * 1 + 'px';
    mountains4.style.top = value * .5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 1.5 + 'px';
   if(scrollY >= 67){
    nuts.style.position = 'fixed';
    if(scrollY >= 478){
        nuts.style.display = 'none';
    }else{
        nuts.style.display = 'block'
    }
    if(scrollY >= 125){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
   }
}