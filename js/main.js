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

// HeroVideo
const ScaleEffect = gsap.fromTo('.HeroVideo',{
    scale: 0.8,
},
{
    scale:1,
    duration: 1,
})
 ScrollTrigger.create ({
        trigger: '.HeroVideoRow',
        markers: false,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        animation: ScaleEffect,
        duration: 1,
    })

// *****

// AboutSection 
const AboutTitleAni = gsap.fromTo('#AboutTitle', {
    y: 20,
    opacity: 0,
},
{
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power4.out',
})
    ScrollTrigger.create ({
        trigger: '.AboutSection',
        markers: false,
        start: "top 80%",
        end: "center bottom",
        animation: AboutTitleAni,
        duration: 0.6,
        scrub: true,
    })

const AboutDesSplit = new SplitType('#AboutDes');
const AboutDesAni = gsap.to(AboutDesSplit.words, {
    color:"#292929",
    stagger: 0.1,
})
    ScrollTrigger.create ({
        trigger: '.AboutSection',
        markers: true,
        start: "top 50%",
        end: "70% bottom",
        animation: AboutDesAni,
        duration: 0.6,
        scrub: true,
    })
});