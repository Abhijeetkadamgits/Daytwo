var ele = gsap.timeline();

ele.from("#logo,#first-h1", {
  y:-80,
  duration :1.5,
  opacity :0.1,
  stagger : 0.2
});
ele.from("#left-img",{
  duration: 2, 
  scale: 3,
});
ele.from("#right-img",{
  duration: 2, 
  scale: 0.3,
});