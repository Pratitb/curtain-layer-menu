let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
})