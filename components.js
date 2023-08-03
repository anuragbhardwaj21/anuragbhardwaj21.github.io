const navbar = () => {
  return `
  <a href="index.html"><img src="./nav-icon.png" alt=""></a>
  <a href="index.html" class="nav-link home">Home</a>
  <a href="#about" class="nav-link about">About</a>
  <a href="#skills" class="nav-link skills">Skills</a>
  <a href="#projects" class="nav-link projects">Projects</a>
  <a href="#contact" class="nav-link contact">Contact</a>
  <button
  id="resume-button-1"
  class="nav-link resume"
>
  Resume
  <ion-icon
    name="download-outline"
    role="img"
    class="md hydrated"
  ></ion-icon>
</button>

`;
};
const footer = () => {
  return `<a href="">Home</a>
  <a href="">About</a>
  <a target="_blank" href="https://www.instagram.com/23.61.am/">Connect on Insta</a>
  <a target="_blank" href="https://www.linkedin.com/in/anurag-bhardwaj-2361am/">Connect on LinkedIn</a>
  <a href="#" target="_blank" class="nav-link resume" download="Anurag_CV.pdf">Resume <ion-icon name="download-outline"></ion-icon></a>`;
};
export {navbar,footer};
