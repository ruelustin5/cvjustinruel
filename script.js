window.onload = function(){
new TypeIt(".justin", {
    speed: 50,
    waitUntilVisible: true
  }).go();
gsap.registerPlugin(ScrollTrigger);
const content1 = document.querySelectorAll(".content")[0];
const content2 = document.querySelectorAll(".content")[1];
const content3 = document.querySelectorAll(".content")[2];
const content4 = document.querySelectorAll(".content")[3];
const content5 = document.querySelectorAll(".content")[4];
gsap.from(content1,{duration: 1, opacity: 0, x: "5vw", scrollTrigger: {trigger: content1}});
gsap.from(content2,{duration: 1, opacity: 0, x: "5vw", scrollTrigger: {trigger: content2}});
gsap.from(content3,{duration: 1, opacity: 0, x: "5vw", scrollTrigger: {trigger: content3}});
gsap.from(content4,{duration: 1, opacity: 0, x: "5vw", scrollTrigger: {trigger: content4}});
gsap.from(content5,{duration: 1, opacity: 0, x: "5vw", scrollTrigger: {trigger: content5}});
webhost = document.querySelector("img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']");
webhost.style.display = "none";
};