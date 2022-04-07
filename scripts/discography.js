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

// let animCoeur = document.querySelectorAll('.coeur');

// animCoeur.forEach( (coeur, index) => {
//     gsap.timeline({
//         scrub: true,
//         scrollTrigger: {
//             markers: true,
//             trigger: coeur,
//         }
//     })
//     .to('.coeur', {y: })
// })

// essaie tp6

// const body = document.querySelector('body');
// let isScrolling;


// window.addEventListener('scroll', function() {
// 	window.clearTimeout( isScrolling );
//   body.classList.add("up");
  

// 	isScrolling = setTimeout(function() {
// 		console.log( 'Scrolling has stopped.' );
//     body.classList.remove("up");
//     body.classList.remove("down");
// 	}, 250);
// });

// let anim = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.animation',
    
//     onUpdate: (e) => {
      
//       if(e.progress){
//          if(e.direction==-1){
//           body.classList.add("up");
//           body.classList.remove("down");
//         }else{
//           body.classList.add("down");
//           body.classList.remove("up");
//         }
//       }
//     }
  
//   }
// });
