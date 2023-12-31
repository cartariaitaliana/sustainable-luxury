// Lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// GSAP animation configuration
const animationDuration = .3;

function toggleMenu() {
    var body = document.body;
    var menuOverlay = document.getElementById("menuOverlay");
    var menu = document.querySelector(".menu");

    // Toggle the menu-open class on the body
    body.classList.toggle("menu-open");

    if (body.classList.contains("menu-open")) {
        // If the menu is opening
        gsap.to(menuOverlay, {
            display: "flex",
            y: 0,
            duration: animationDuration
        });
        gsap.to(menu, {
            y: 0,
            duration: animationDuration,
            ease: "power2.out",
            delay: .5
        });

        gsap.to(".menu_element", {
            delay: .2,
            opacity: 1,
            duration: .2,
            stagger: .1
        })

        gsap.to("#barra1", {
            rotation: 45,
            duration: .4,
            y: 6,
        })
          
        gsap.to("#barra2", {
            duration: .4,
            opacity: 0,
        })
        
        gsap.to("#barra3", {
            rotation: -45,
            duration: .4,
            y: -6,
        })

    } else {
        gsap.to(".menu_element", {
            opacity: 0,
            duration: .2,
            stagger: .1
        })

        // If the menu is closing
        gsap.to(menuOverlay, {
            delay: .5,
            y: "-100vh",
            duration: animationDuration,
            onComplete: hideMenu });
            
        gsap.to(menu, {
            delay: .2,
            duration: animationDuration,
            ease: "power2.in" });

        gsap.to("#barra1", {
            rotation: 0,
            duration: 0.4,
            y: 0,
        })
            
        gsap.to("#barra2", {
            duration: .4,
            opacity: 1,
        })
        
        gsap.to("#barra3", {
            rotation: 0,
            duration: .4,
            y: 0,
        })
    }
}

function hideMenu() {
    var menuOverlay = document.getElementById("menuOverlay");
    menuOverlay.style.display = "none";
}


function closeMenu() {
    var body = document.body;
    var menuOverlay = document.getElementById("menuOverlay");

    // Remove the menu-open class and hide the menu overlay
    body.classList.remove("menu-open");
    menuOverlay.style.display = "none";

    // Remove the event listener after closing the menu
    menuOverlay.removeEventListener("click", closeMenu);
}


document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();

    tl.from(".header", {
        delay: .5,
        duration: .5,
        width: 0,
        opacity: 0
    })

    tl.from(".hero_title", {
        opacity: 0,
        y: -10,
        duration: .5,
    });

    tl.from(".hero_text", {
        opacity: 0,
        y: -10,
        duration: .5,
    });

    tl.from(".hero_image", {
        opacity: 0,
        y: -10,
        duration: .5,
    });

    tl.to("#main_content", {
        opacity: 1,
        duration: .5,
    });

});
