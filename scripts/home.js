gsap.registerPlugin(ScrollTrigger);

let swiper = new Swiper(".swiper", {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar'
  }
});


let sections = document.querySelectorAll('section')

sections.forEach(function (section) {

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      toggleActions: 'restart complete reverse reset',
    }
  })
    .from(section, { opacity: 0 })
    .to(section, { opacity: 100 })

  let images = section.querySelectorAll('section img');
  images.forEach(function (img) {
    gsap.timeline({
      scrollTrigger: {
        trigger: img,
        toggleActions: 'restart complete reverse reset',
      }
    })
      .from(img, { scale: 0 })
      .to(img, { scale: 1 })
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: 'video',
      toggleActions: 'restart complete reverse reset',
    }
  })
    .from('video', { scale: 0 })
    .to('video', { scale: 1 })
});


const spritesheet = document.querySelector('.spritesheet');
let scroll

window.addEventListener('scroll', function () {
  window.clearTimeout(scroll);
  scroll = setTimeout(function () {
    spritesheet.className = 'spritesheet';
  }, 200);
});

let animation = gsap.timeline({
  scrollTrigger: {
    trigger: '.secondaire',
    onUpdate: (e) => {
      if (e.progress) {
        if (e.direction == -1) {
          spritesheet.className = 'haut'
        } else {
          spritesheet.className = 'bas'
        }
      }
    }

  }
});

let btnRecherche =  document.querySelector('.recherche');
let titreRecherche = document.querySelector('.titreRecherche');
let divRecherche = document.querySelector('.paroles');
let spinner = document.querySelector('.spinner');

const newLineToBr = function(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

btnRecherche.addEventListener('click', function(e){
  e.preventDefault();
  spinner.style.display = 'inline-block';
  
  if(titreRecherche.value == ''){
    spinner.style.display = 'none';
    titreRecherche.value = "Veuillez mettre le nom d'un titre ici";
  }
  else{
    fetch(`https://api.lyrics.ovh/v1/backstreet boys/${titreRecherche.value}`) 
    .then(data => data.json()) 
    .then(actor => { 
      spinner.style.display = 'none'
      const newParoles = newLineToBr(actor.lyrics)
      divRecherche.innerHTML = `<br><h3> Paroles de: ${titreRecherche.value} </h3><br> ${newParoles};`
    })
    .catch(error => {
      spinner.style.display = 'none'
      divRecherche.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`});
  }
})

