var typed = new Typed(".auto-type", {strings: ["Welcome!",
                                               "I'm studying computer engineering.",
                                               "I'm a software developer.",
                                               "I'm seeking Summer 2023 internships.",
                                                ],
                                     typeSpeed: 100, 
                                     backSpeed: 50,
                                     loop: true})
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab (tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6ttWaQp04LXHjflhFZLnrdB6N6Px6ba8AFgikBbt2ma9jnMGif3R2yWEfPwwAKPt6FA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Success"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
        }) 
    .catch(error => console.error('Error!', error.message))
})
let currentScrollPosition = 0;
let scrollAmount = 320;
const sCont = document.querySelector(".logos-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
let maxScroll = -sCont.offsetWidth + hSCroll.offsetWidth;
btnScrollLeft.style.opacity = "0";
function scrollHorizontally(val) {
    currentScrollPosition = currentScrollPosition + (val * scrollAmount);
    if(currentScrollPosition >= 0) {
        currentScrollPosition = 0;
        btnScrollLeft.style.opacity = "0";
    }
    else {
        btnScrollLeft.style.opacity = "1";
    }
    if(currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    }
    else {
        btnScrollRight.style.opacity = "1";
    }
    SCont.style.left = currentScrollPosition + "px";
}
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
           