// DISPLAY NAVBAR LIST ITEM

listIcon.onclick = function () {
  navbar_list.classList.toggle("active");
};

// CLOSE LIST ITEM

document.querySelectorAll(".navbar-list li").forEach((el) => {
  el.addEventListener("click", () => {
    navbar_list.classList.toggle("active");
  });
});

// ADD ABOUT INFORMATION

const my_Profile = [
  { name: "name", value: ": Majd Shaban" },
  { name: "Birthday", value: ": March 20, 1990" },
  { name: "Address", value: ": Tartous-Syria" },
  { name: "Phone", value: ": +963-936269876" },
  { name: "Email", value: ": majdshaban@hotmail.com" },
  { name: "Freelance", value: ": Available" },
];

let aboutInfo = document.querySelector(".about-info");
const infoUl = document.createElement("ul");
infoUl.setAttribute("class", "info-name");
const viewInfo = () => {
  const view = my_Profile.map((el) => {
    return `
      <li>${el.name} <span>${el.value}</span></li>
    `;
  });
  infoUl.innerHTML = view.join("");
  console.log(infoUl);
  aboutInfo.appendChild(infoUl);
  console.log(aboutInfo);
};

viewInfo();

// ADD SKILLS INFORMATION

let my_skills = [
  { name: "HTML", icon: "bx bxl-html5" },
  { name: "CSS", icon: "bx bxl-css3" },
  { name: "JAVASCRIPT", icon: "bx bxl-javascript" },

  { name: "REACT JS", icon: "bx bxl-react" },
  { name: "REDUX & NEXT JS", icon: "bx bxl-redux" },
  { name: "BOOTSTRAP", icon: "bx bxl-bootstrap" },
  { name: "JSON & AJAX & AXIOS", icon: "bx bxs-file-json" },
  { name: "GIT & GITHUB", icon: "bx bxl-github" },
  { name: "ADOBE PHOTOSHOP", icon: "bx bxl-adobe" },
];

let skillsContent = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = my_skills.map((skill) => {
    return `
      <div class="skills-box line-swaping">
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      </div>
      `;
  });

  skillsContent.innerHTML = display.join("");
};

displaySkills();

//  ====== ADD PORTFOLIO SECTION ======

let portfolioItems = [
  { id: 1, text: "All" },
  { id: 2, text: "Javascript" },
  { id: 3, text: "HTML & CSS" },
  { id: 4, text: "React & Redux" },
  { id: 5, text: "React & Bootsrap" },
];

let PortfolioProjects = [
  {
    id: 1,
    image: "../images/portfolio-img1.jpg",
    type: "React&Bootsrap",
  },
  {
    id: 2,
    image: "../images/portfolio-img2.jpg",
    type: "React&Redux",
  },
  {
    id: 3,
    image: "../images/portfolio-img3.jpg",
    type: "React&Redux",
  },
  {
    id: 4,
    image: "../images/portfolio-img4.jpg",
    type: "HTML&CSS",
  },
  {
    id: 5,
    image: "../images/portfolio-img5.jpg",
    type: "React&Bootsrap",
  },
  {
    id: 6,
    image: "../images/portfolio-img6.jpg",
    type: "HTML&CSS",
  },
  {
    id: 7,
    image: "../images/portfolio-img7.jpg",
    type: "React&Bootsrap",
  },
  {
    id: 8,
    image: "../images/portfolio-img8.jpg",
    type: "Javascript",
  },
];

const portfolioContent = document.querySelector(".portfolio-content");
const portfolioList = document.createElement("ul");
portfolioList.setAttribute("class", "portfolio-list");
const viewListItem = () => {
  const items = portfolioItems.map((item) => {
    return `
    <li class="portfolio-list-item">${item.text} </li>
    `;
  });
  portfolioList.innerHTML = items.join("");

  portfolioList.firstElementChild.classList.add("active");
  portfolioContent.appendChild(portfolioList);
};

viewListItem();

// VIEW PORTFOLIO PROJECTS

const portfolioProjects = document.createElement("div");
portfolioProjects.setAttribute("class", "portfolio-projects");

const viewPortfolioProjects = () => {
  const projects = PortfolioProjects.map((project) => {
    return `
    <div class="img-box active" data-type=${project.type}>
      <img src=${project.image} alt="img"/>
      <div class="overlay">
        <span>View Project</span>
        <p>Using ${project.type}</p>
      </div>
    </div>
    `;
  });
  portfolioProjects.innerHTML = projects.join("");
  portfolioContent.appendChild(portfolioProjects);
};

viewPortfolioProjects();

// SET CLASS ACTIVE TO SELECTED ITEM
const listItems = document.querySelectorAll(".portfolio-list li");

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    listItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const imgsBox = document.querySelectorAll(".portfolio-projects .img-box");
    let compareValue = e.target.innerText.replace(/ /g, "");
    imgsBox.forEach((imgBox) => {
      imgBox.classList.remove("active");

      if (compareValue === "All") {
        imgBox.classList.add("active");
      } else if (compareValue === imgBox.getAttribute("data-type")) {
        imgBox.classList.add("active");
      }
    });
  });
});

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", (e) => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-sun");
}

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", {});

// ABOUT SCROLL REVEAL
sr.reveal(".about-desc", {});
sr.reveal(".about-info", { delay: 300 });

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});

// CONTACT SCROLL REVEAL
sr.reveal(".contact", {});
