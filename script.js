const btnmobile = document.getElementById('btn-mobile');



function menu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}
btnmobile.addEventListener('click',menu);