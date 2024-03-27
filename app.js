var ele = gsap.timeline();

ele.from("#logo,#first-h1", {
  y:-100,
  duration :1.5,
  opacity :0.1,
  stagger : 0.2
});
gsap.from("#left-img",{
  duration: 1.5, 
  y : 100,
});
gsap.from("#right-img",{
  y:-100,
  duration:1.5
});