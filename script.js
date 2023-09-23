// --------------------------------------------->
const mediaQuery = window.matchMedia("(min-width: 1050px)");
window.onload = function () {
  var text = [
    "FullStack Engineer",
    "QA Automation Engineer",
    "Video Editor",
    "E-Sports Player",
    "Here",
  ];
  var index = 0;
  var pTag = document.getElementById("myParagraph");

  var intervalId = setInterval(function () {
    pTag.innerHTML = `${text[index]}`;
    if (text[index] === "Here") {
      clearInterval(intervalId);
    }
    index = (index + 1) % text.length;
  }, 730);

  setTimeout(function () {
    var tl = gsap.timeline();
    tl.to("#preloader", {
      top: "-100%",
      duration: 1.5,
      ease: "Power4.easeOut",
    })
      .from("#nav-menu", {
        delay: 0.5,
        duration: 1.5,
        y: -50,
        opacity: 0,
      })
      .from("#line1", {
        transform: "translateX(-100%)",
        duration: 5,
        ease: "Power4.easeOut",
      })
      .from("#line2", {
        duration: 1.5,
        y: -20,
        opacity: 0,
      })
      .from("#line3", {
        transform: "translateX(100%)",
        duration: 5,
        ease: "Power4.easeOut",
      })
      .from("#line4", {
        duration: 8,
        opacity: 0,
        y: -10,
        ease: "Power4.easeOut",
      });
    document.body.style.overflow = "auto";
    var navMenu = document.getElementById("nav-menu");
    navMenu.style.zIndex = "9999";
  }, 4700);
};
// --------------------------->
document.addEventListener("DOMContentLoaded", function () {
  if (mediaQuery.matches) {
    gsap.to(".foreground-image", {
      y: "-50%%",
      scale: 2,
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to(".foreground-image2", {
      y: "-30%%",
      x: "-20%",
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to(".backgroundclouds", {
      scale: 1.2,
      y: "0%",
      x: "0%",
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to(".backgroundclouds2", {
      scale: 1.2,
      y: "0%",
      x: "0%",
      opacity: 1,
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to(".background-image", {
      scale: 1.2,
      x: "10%",
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to("#innerhome p", {
      scale: 1.5,
      opacity: 0,
      scrollTrigger: {
        id: "image",
        trigger: "#innerhome",
        scrub: 5,
        start: "top 5%",
        end: "bottom 30%",
      },
    });
    gsap.to("#innerhome", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#innerhome",
        scrub: true,
        start: "top -20%",
        end: "bottom 55%",
      },
    });
  }
});

// --------------------------->

var divs = document.querySelectorAll("#main > div");
var lastLoggedDiv = null;
var currentdivTitle = document.getElementById("currentdiv");
function logCurrentDiv() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var currentDiv = null;

  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var offsetTop = div.offsetTop;

    if (scrollTop >= offsetTop && scrollTop < offsetTop + div.offsetHeight) {
      currentDiv = div;
      break;
    }
  }

  if (currentDiv && currentDiv !== lastLoggedDiv) {
    if (currentDiv.id == "home") {
      currentdivTitle.innerHTML = ".home()";
    }
    if (currentDiv.id == "about") {
      currentdivTitle.innerHTML = ".about()";
    }
    if (currentDiv.id == "skills") {
      currentdivTitle.innerHTML = ".skills()";
    }
    if (currentDiv.id == "projects") {
      currentdivTitle.innerHTML = ".projects()";
    }
    if (currentDiv.id == "statistics") {
      currentdivTitle.innerHTML = ".statistics()";
    }
    if (currentDiv.id == "contact") {
      currentdivTitle.innerHTML = ".contact()";
    }
    lastLoggedDiv = currentDiv;
  }
}

window.addEventListener("scroll", logCurrentDiv);

// --------------------------->
const switchMode = document.getElementById("switchmode");
switchMode.onclick = () => {
  document.body.classList.toggle("light-theme");
};

// ---------------------------->
let skillsValues = [
  {
    name: "HTML 5",
    link: "./images/html.png",
  },
  {
    name: "CSS 3",
    link: "./images/css.png",
  },
  {
    name: "JS",
    link: "./images/js.png",
  },
  {
    name: "React",
    link: "./images/react.png",
  },
  {
    name: "Redux",
    link: "./images/redux.png",
  },
  {
    name: "Node JS",
    link: "./images/node.png",
  },
  {
    name: "Mongo DB",
    link: "./images/mongodb.png",
  },
  {
    name: "Express JS",
    link: "./images/express.png",
  },
  {
    name: "Python",
    link: "./images/python.png",
  },
  {
    name: "Java",
    link: "./images/java.png",
  },
  {
    name: "Selenium",
    link: "./images/selenium.png",
  },
  {
    name: "GSAP",
    link: "./images/gsap.svg",
  },
  {
    name: "Premiere Pro",
    link: "./images/pp.png",
  },
  {
    name: "After Effects",
    link: "./images/ae.png",
  },
  {
    name: "Git",
    link: "./images/git.png",
  },
];
const skillsRightArea = document.getElementById("rightskills");
for (let i = 0; i < skillsValues.length; i++) {
  var skillscard = document.createElement("div");
  skillscard.setAttribute("id", "skillscard");
  skillscard.classList.add("card");
  skillscard.innerHTML = `
  <img src="${skillsValues[i].link}" alt="">
  <p>${skillsValues[i].name}</p> 
  `;
  skillsRightArea.append(skillscard);
}
// ---------------------------------------------->>>>>>
const cloudsDiv = document.getElementById("clouds");
const body = document.body;
const navvv = document.getElementById("nav-menu");
const anchorElements = document.querySelectorAll("#right-nav a");

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navvv.classList.add("cloudnavmenu");
      body.classList.add("blue-background");
    } else {
      body.classList.remove("blue-background");
      navvv.classList.remove("cloudnavmenu");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(cloudsDiv);
if (mediaQuery.matches) {
  gsap.to("#clouds img:first-child", {
    x: "96%",
    scrollTrigger: {
      trigger: "#clouds",
      scrub: 4,
      start: "top 60%",
      end: "bottom 20%",
    },
    opacity: 0.3,
  });
  gsap.to("#clouds img:nth-child(2)", {
    x: "98%",
    y: "-10%",
    scrollTrigger: {
      trigger: "#clouds",
      scrub: 5,
      start: "top 40%",
      end: "bottom 20%",
    },
    opacity: 0.3,
  });
  gsap.to("#clouds img:nth-child(3)", {
    x: "-100%",
    y: "0%",
    scrollTrigger: {
      trigger: "#clouds",
      scrub: 4,
      start: "top 80%",
      end: "bottom 20%",
    },
    opacity: 0.2,
  });

  gsap.to("#about p", {
    scrollTrigger: {
      trigger: "#about",
      scrub: 2,
      start: "top 65%",
      end: "bottom 100%",
    },
    opacity: 1,
  });
  gsap.to("#aboutp", {
    scrollTrigger: {
      trigger: "#about",
      scrub: 2,
      start: "top 50%",
      end: "bottom 10%",
    },
    color: "rgb(104, 72, 233)",
  });

  gsap.to("#skillsp", {
    scrollTrigger: {
      trigger: "#skills",
      scrub: 5,
      start: "top 80%",
      end: "bottom 100%",
    },
    opacity: 1,
    scale: 2,
  });
  gsap.to("#rightskills", {
    x: "0%",
    scrollTrigger: {
      trigger: "#rightskills",
      scrub: 5,
      start: "top 80%",
      end: "bottom 100%",
    },
    opacity: 1,
  });
}
// ------------project animation
gsap.to("#projectanimation", {
  x: "100%",
  scrollTrigger: {
    id: "image",
    trigger: "#projectanimation",
    scrub: 5,
    start: "top 46%",
    end: "bottom 20%",
  },
});

gsap.to("#projecttitle", {
  x: "0%",
  scrollTrigger: {
    id: "text",
    trigger: "#projecttitle",
    scrub: 3,
    start: "top 60%",
    end: "bottom 30%",
  },
  opacity: 1,
});
gsap.to("#projecttitle", {
  scrollTrigger: {
    trigger: "#projecttitle",
    scrub: 5,
    start: "top 40%",
    end: "bottom 10%",
  },
  scale: 4,
});
gsap.to("#projecttitle", {
  scrollTrigger: {
    trigger: "#projecttitle",
    scrub: 5,
    start: "top 35%",
    end: "bottom 1%",
  },
  bottom: 0,
});

// ------------------------------------project k nichey wala animation\
gsap.to(".gallery", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#projecttitle",
    scrub: 5,
    start: "top 20%",
    end: "bottom 15%",
  },
});

const details = gsap.utils.toArray(".projectCardDetail:not(:first-child)");
const photos = gsap.utils.toArray(".project-image:not(:first-child)");
gsap.set(photos, { yPercent: 101 });
const allPhotos = gsap.utils.toArray(".project-image");
let mm = gsap.matchMedia();

mm.add("(min-width: 500px)", () => {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
  });
  details.forEach((detail, index) => {
    let headline = detail.querySelector("h2");
    let animation = gsap
      .timeline()
      .to(photos[index], { yPercent: 0 })
      .set(allPhotos[index], { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: headline,
      start: "top 80%",
      end: "top 50%",
      animation: animation,
      scrub: 3,
    });
  });

  return () => {
    console.log("mobile");
  };
});

// ------------------------------------>
const text = document.querySelector("#rightaboutp");
const words = text.textContent.split(" ");
text.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");

gsap.to("#rightaboutp span", {
  duration: 1,
  color: "var(--white)",
  ease: "none",
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#rightabout",
    start: "top 40%",
    end: "bottom 85%",
    scrub: 2,
  },
});
gsap.to("#resume-button-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#rightabout",
    start: "top 40%",
    end: "bottom 85%",
    scrub: true,
    scrub: 2,
  },
});
gsap.to("#mainabout", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#rightabout",
    start: "top 55%",
    end: "bottom 90%",
    scrub: true,
    scrub: 5,
  },
});

// ---------------------------------------->
// ease: "Power4.easeOut",
gsap.from("#contactp", {
  opacity: 0,
  scale: 1.2,
  scrollTrigger: {
    trigger: "#contactp",
    scrub: 5,
    start: "top 70%",
    end: "bottom 60%",
  },
});
gsap.to("#whatsapp", {
  opacity: 1,
  ease: "Power4.easeOut",
  scrollTrigger: {
    trigger: "#qrwrapper",
    start: "top 70%",
    end: "bottom 90%",
    scrub: 4,
  },
});
gsap.to("#contact-phone", {
  opacity: 1,
  ease: "Power4.easeOut",
  scrollTrigger: {
    trigger: "#qrwrapper",
    start: "top 65%",
    end: "bottom 85%",
    scrub: 4,
  },
});
gsap.to("#contact-email", {
  opacity: 1,
  ease: "Power4.easeOut",
  scrollTrigger: {
    trigger: "#qrwrapper",
    start: "top 60%",
    end: "bottom 80%",
    scrub: 4,
  },
});
// ----------------------------------------->footer animation
gsap.to("#contact", {
  width: "95%",
  scrollTrigger: {
    id: "contact",
    trigger: "#contact",
    start: "top -5%",
    end: "bottom 80%",
    scrub: true,
  },
});
gsap.to("#main", {
  backgroundColor: "var(--white)",
  scrollTrigger: {
    trigger: "#statistics",
    start: "top 3%",
    end: "bottom 98%",
    scrub: true,
  },
});

// --------------------------------------------------->resume button 2
document
  .getElementById("resume-button-2")
  .addEventListener("click", function () {
    // File URL
    var fileURL = "Anurag_resume.pdf";
    window.open("", "_blank");
    var link = document.createElement("a");
    link.href = fileURL;
    link.download = "Anurag_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

// ------------------------------------------>statistics
gsap.to("#statsa1", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#statsp",
    start: "top 60%",
    end: "bottom 50%",
    scrub: 3,
  },
});
gsap.to("#statsa2", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#statsp",
    start: "top 40%",
    end: "bottom 30%",
    scrub: 2,
  },
});
gsap.to("#statsa3", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#statsp",
    start: "top 20%",
    end: "bottom 25%",
    scrub: 2,
  },
});
gsap.to("#statsa4", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#statsp",
    start: "top 15%",
    end: "bottom 20%",
    scrub: 2,
  },
});

// --------------------------->hamburger-menu-button
const hamburgerMenuButton = document.getElementById("hamburger-menu-button");
const rightPanel = document.querySelector(".rightpanel");
let isOpen = false;

hamburgerMenuButton.addEventListener("click", function () {
  if (isOpen) {
    hamburgerMenuButton.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    rightPanel.classList.remove("open");
    rightPanel.classList.add("close");
  } else {
    hamburgerMenuButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    rightPanel.classList.remove("close");
    rightPanel.classList.add("open");
  }
  
  isOpen = !isOpen;
});
