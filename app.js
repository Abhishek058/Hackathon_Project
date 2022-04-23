const nav = document.querySelector(".navbar");
const navBody = document.querySelector(".body");
const toggleBtn = document.querySelector(".nav-btn");
const xBtn = document.querySelector(".x-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.add("show-nav");
  // navBody.classList.add('body-visible')
});
xBtn.addEventListener("click", () => {
  nav.classList.remove("show-nav");
  // navBody.classList.remove('body-visible')
});

const teamMembers = [
  {
    memName: "Abhay Aggarwal",
    memPic: "./images/img3.jpeg",
    memSkill: ["C++", "JavaScript", "Python", "CSS", "Node.js", "React.js"],
  },
  {
    memName: "Abhiraj Singh Chatrath",
    memPic: "./images/img2.jpeg",
    memSkill: ["C++", "CSS", "Python", "React.js", "Django"],
  },
  {
    memName: "Abhishek",
    memPic: "./images/img1.jpeg",
    memSkill: ["C++", "JavaScript", "Python", "CSS", "React.js"],
  },
];

const outlook = document.querySelector(".outlook");

outlook.addEventListener("click", () => {
  xBtn.click();
});
