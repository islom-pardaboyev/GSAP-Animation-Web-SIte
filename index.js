const text1 = document.querySelector("#text1");
const img1 = document.querySelector(".img1");

text1.addEventListener("mouseover", () => {
  gsap.to(text1, {
    marginRight: "-41rem",
    duration: 2
  });
  gsap.from(img1, {
    y: 200,
    autoAlpha: 0,
    duration: 2,
    display: "block",
  })
})