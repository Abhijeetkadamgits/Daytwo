var ele = gsap.timeline();

ele.from("#first-h1", {
  y:-100,
  duration :1.5,
  opacity :0.1,
  stagger : 0.2
});
gsap.from("#logo",{
  duration :2,
  opacity :0.1,
  scale : 0.2
});
gsap.from("#left-img",{
  duration: 1.5, 
  y : 100,
});
gsap.from("#right-img",{
  y:-100,
  duration:1.5
});
gsap.from("#btm",{
  y:100,
  duration: 1.5,
  stagger : 0.2
});