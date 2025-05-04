let ham = document.getElementById("ham");
let nav = document.getElementsByClassName("nav")[0];
let navlist_second = document.getElementsByClassName("nav-list-second")[0];
//[0] kina bhani dherai wota firstclass huna sakcha
//tyo ham ma garni kaam
ham.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
  navlist_second.classList.toggle("active-nav-list-second");

  if (nav.classList.contains("active-nav")) {
    //contain bhaneko yedi tyo active nav tesbhitra cha ki chaina bhanera check garcha
    ham.src = "cross.svg";
  } else {
    ham.src = "hamburger.svg";
  }
});
var typed = new Typed("#profession", {
  strings: ["Web Developer", "Programmer", "CS Student"],
  typeSpeed: 120,
  backspeed: 120,
  loop: true,
});

let t1 = gsap.timeline();
t1.from(".nav", {
  x: -200,
  opacity: 0,
  duration: 1,
});
t1.from(".left-nav", {
  y: -200,
  opacity: 0,
  duration: 1,
});
t1.from(".icon", {
  y: -200,
  opacity: 0,
  duration: 1,
});
t1.from(".list-items", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});

// let t9=gsap.timeline();

// t9.from(".list-items",{
//     y:-200,
//     opacity:0,
//     duration:1,
//     stagger:1
// })

let t2 = gsap.timeline();
t2.from(".line", {
  x: -80,
  opacity: 0,
  duration: 1,
  stagger: 1,
});
t2.from("#btn", {
  x: -60,
  opacity: 0,
  duration: 1,
  stagger: 1,
});
// let t3=gsap.timeline();
gsap.from(".logo", {
  x: 500,
  opacity: 0,
  duration: 1,
  // stagger:1
});
let t4 = gsap.timeline();
t4.from(".heading", {
  x: -200,
  opacity: 0,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});
// let t5=gsap.timeline();
t4.from(".bio", {
  x: 300,
  opacity: 0,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".bio",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});
// let t6=gsap.timeline();
// t4.from("#value",{
//     x:300,
//     opacity:0,
//     duration:1,
//     // stagger:1
//     scrollTrigger:{
//         trigger:"#value",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 50%",
//         scrub:2

//     }
// })
let t5 = gsap.timeline();
t5.from(".heading-skill", {
  x: -200,
  opacity: 0,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".heading-skill",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});
t5.from(".prog", {
  x: 200,
  opacity: 0,
  rotate: 360,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".prog",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

let t6 = gsap.timeline();

t6.from(".right-contact", {
  x: 200,
  opacity: 0,
  // rotate:360,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".right-contact",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});
let t7 = gsap.timeline();
t7.from(".icons", {
  x: -200,
  opacity: 0,
  rotate: 360,
  duration: 1,
  // stagger:1
  scrollTrigger: {
    trigger: ".icons",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
  },
});

//for project section
let t8 = gsap.timeline();
t8.from(".heading-project", {
  y: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".heading-project",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});

t8.from(".project-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".project-container",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});
