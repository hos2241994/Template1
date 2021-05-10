const navIcon = document.querySelector('#hamburger');
const navBar = document.querySelector('.header .nav');
const navItem = document.querySelectorAll('.nav > li');


navIcon.addEventListener("click", function(){
    navBar.classList.toggle('show');
})

navItem.forEach(element => {
    element.addEventListener("click", function(){
        navBar.classList.toggle('show');
    })
});

/*window.addEventListener('resize', function(event) {
    if(window.innerWidth <= 992){
        navIcon.addEventListener("click", function(){
                if(this.checked){
                    navBar.style.display = "flex";
                    navBar.style.flexDirection = "column";
                }
        })
    }
});*/