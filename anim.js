const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelectorAll(".logo");
const search = document.querySelectorAll(".input_search");
const media = document.querySelectorAll(".media");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    titreSpans,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .from(search, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .staggerFrom(media, 1, { right: -200, ease: "power2.out" }, 0.3, "-=1");

  TL.play();
});
