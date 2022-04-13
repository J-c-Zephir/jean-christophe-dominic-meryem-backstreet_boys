gsap.registerPlugin(ScrollTrigger);

let swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: { delay: 2000, },

    slideToLoop(index, speed, runCallbacks) {
        index = 3,
        speed = 2000,
        runCallbacks = true
    },
});

// gsap.to('.album1', {
//     markers: true,
//     x: '100%',
//     duration: 4,
// });



let sections = document.querySelectorAll('section');
sections.forEach( section => {
    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            toggleActions: 'restart complete reverse reset',
        }
    })
    .from(section, { opacity: 0 })
    .to(section, { opacity: 100 })

    let images = section.querySelectorAll('img');
    images.forEach( image => {
        gsap.timeline({
            scrollTrigger: {
                trigger: image,
                toggleActions: 'restart complete reverse reset',
            }
        })
        .from(image, { scale: 0 })
        .to(image, { scale: 1 })
    })

    let videos = section.querySelectorAll('iframe');
    videos.forEach( video => {
        gsap.timeline({
            scrollTrigger: {
                trigger: video,
                toggleActions: 'restart complete reverse reset',
            }
        })
        .from(video, { scale: 0 })
        .to(video, { scale: 1 })
    })
})

// tp 06

let body = document.querySelector('body');
let isScrolling;
let animCoeur = document.querySelector('.anim');

window.addEventListener('scroll', () => {
    isScrolling = setTimeout( () => {
        animCoeur.className = 'idle'
    }, 250);
});


let anim = gsap.timeline({
    scrollTrigger: {
      trigger: '.animation',
        onUpdate: (e) => {
            if (e.progress) {
                if(e.direction==-1){
                    animCoeur.className = "up"
                } else {
                    animCoeur.className = "down"
                }
            }
        }
    }
});