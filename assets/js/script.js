document.getElementById("dropdownActivator").onclick = function() {dropdownList()};
let totopbtn = document.getElementById("toTop");

window.onscroll = function() {scrollUpFunction()};

function dropdownList() {
    document.getElementById("phoneDropdown").classList.toggle("show");
}

function scrollUpFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        totopbtn.style.display = "block";
    } else {
        totopbtn.style.display = "none";
    }
}

function backToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}