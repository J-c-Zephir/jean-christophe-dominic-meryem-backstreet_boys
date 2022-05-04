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

// tp8

const newLineToBr = function(str){
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

let btn = document.querySelector('.btnForm')
let div = document.querySelector('.divTP8')
let spinner = document.querySelector('.spinner-border')
btn.addEventListener('click', e => {
    e.preventDefault()
    spinner.style.display = 'inline-block';
    let text = document.querySelector('.text')
    console.log(text.value) 
    if (text == "") {
        spinner.stye.display = "none"
        text.placeholder = "titre de chanson!!"
    } else {
        fetch(`https://api.lyrics.ovh/v1/backstreet boys/${text.value}`)
        .then(data => data.json())
        .then(data => {
            spinner.style.display = 'none'
            let paroles = newLineToBr(data.lyrics)
            div.innerHTML = paroles
        })
        .catch(error => {
            spinner.style.display = 'none'
            div.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`
        })
    }
    
})