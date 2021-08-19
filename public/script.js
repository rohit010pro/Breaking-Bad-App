const header = document.querySelector("header");

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

var prevYpos = window.pageYOffset;

window.onscroll = () => {
  // Scroll to top button
  if (rootElement.scrollTop > 400) {
    scrollToTopBtn.style.right = "20px";
  } else if (rootElement.scrollTop < 300) {
    scrollToTopBtn.style.right = "-60px";
  }

  // header slide
  var currentYpos = window.pageYOffset;
  if (prevYpos > currentYpos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100%";
  }
  prevYpos = currentYpos;

};

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

const searchIcon = document.querySelector("#search-icon");
const searchBox = document.querySelector("#search-box");

searchIcon.addEventListener("click",()=>{
    searchIcon.classList.toggle("active");
    searchBox.classList.toggle("show");
});
