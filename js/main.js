// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,EaselPlugin)
    console.log("cai dit con me ao that day");
    // gsap code here!
    // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
const ScaleEffect = gsap.to('.HeroVideo',{
    scale: 1.2
})
 ScrollTrigger.create ({
        trigger: '.HeroVideoRow',
        markers: true,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        animation: ScaleEffect,
        duration: 1,
    })

   });