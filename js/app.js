
//Ceate a Nav Bar list with arrow function and putting it into it's place
const navBar = document.getElementById("navbar__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

//Nav list items according to sections Number
for (let i = 1; i <= 4; i++) {
  createNavItems();
  }

// for  active state using Element.getBoundingClientRect() 
window.onscroll = function() {
//active
  document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
//Non active
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}
//Scroll to view
navBar.addEventListener("click", (evt) => {
evt.preventDefault();
//scroll function  
  if (evt.target.dataset.nav) {
    document
      .getElementById(`${evt.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
   //timing
      setTimeout(() => {
      location.hash = `${evt.target.dataset.nav}`;
    }, 200);
  }
});







