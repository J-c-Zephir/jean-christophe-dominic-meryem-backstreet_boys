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

let tp5 = gsap.timeline({
    duration: 4,
    scrallTrigger: {
        markers: true,
        start: 'center',
        end: 'center',
        toggleActions: 'restart complete reverse reset',
    }
})
.from('section', { x: '0%' })
.to('section', { x: '100%' })
.to('section', { x: '0%' })
.from('section', { x: '100%' })
    