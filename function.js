var y = document.getElementById("hamburger");
y.addEventListener("click", iconClicked);
var count = 0;
function iconClicked() {
  count++;
  if (count % 2 != 0) {
    document.getElementById("nav").classList.remove("nav-links");
    document.getElementById("nav").classList.add("nav-links-active");
  } else {
    document.getElementById("nav").classList.remove("nav-links-active");
    document.getElementById("nav").classList.add("nav-links");
  }
  console.log(count);
}

var x = document.getElementsByClassName("nav-link");
console.log(document.getElementsByClassName("nav-link"));

document
  .getElementsByClassName("nav-link")[0]
  .addEventListener("click", aboutClicked);
document
  .getElementsByClassName("nav-link")[1]
  .addEventListener("click", hobbyClicked);
document
  .getElementsByClassName("nav-link")[2]
  .addEventListener("click", skillClicked);

var a = document.getElementById("about");
var b = document.getElementById("hobby");
var c = document.getElementById("skill");

function aboutClicked() {
  console.log("cliked");
  a.classList.add("about-me-active");
  a.classList.remove("about-me-inactive");
  b.classList.add("my-hobbies-inactive");
  c.classList.add("my-skills-inactive");

  b.classList.remove("my-hobbies-active");

  c.classList.remove("my-skills-active");
  document.getElementById("nav").classList.remove("nav-links-active");
  document.getElementById("nav").classList.add("nav-links");
  count++;
  document.getElementById("about-click").style.color = "aqua";
  document.getElementById("hobby-click").style.color = "white";
  document.getElementById("skill-click").style.color = "white";
}

function hobbyClicked() {
  a.classList.add("about-me-inactive");
  a.classList.remove("about-me-active");
  b.classList.add("my-hobbies-active");
  b.classList.remove("my-hobbies-inactive");
  c.classList.add("my-skills-inactive");
  c.classList.remove("my-skills-active");
  document.getElementById("nav").classList.remove("nav-links-active");
  document.getElementById("nav").classList.add("nav-links");
  count++;
  document.getElementById("about-click").style.color = "white";
  document.getElementById("hobby-click").style.color = "aqua";
  document.getElementById("skill-click").style.color = "white";
}

function skillClicked() {
  a.classList.add("about-me-inactive");
  a.classList.remove("about-me-active");
  b.classList.add("my-hobbies-inactive");
  b.classList.remove("my-hobbies-active");
  c.classList.add("my-skills-active");
  c.classList.remove("my-skills-inactive");
  document.getElementById("nav").classList.remove("nav-links-active");
  document.getElementById("nav").classList.add("nav-links");
  document.getElementById("about-click").style.color = "white";
  document.getElementById("hobby-click").style.color = "white";
  document.getElementById("skill-click").style.color = "aqua";
  count++;
}
