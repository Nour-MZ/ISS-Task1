const image1observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imagerx.classList.add('imgoo-animation');
    }
  });
});

const image2observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imagery.classList.add('imgoo-animation');
    }
  });
});


const Section1observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');


    }
  });
});

const numberobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      increment("customers", 200);
      increment("projects", 285);
      increment("awards", 42);
    }
  });
});

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        console.log("good")
    }
});
}, observerOptions);







function increment(elem, finalVal) {
    var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
    if (currVal < finalVal) {
      currVal++;
      document.getElementById(elem).innerHTML = currVal ;
  
      setTimeout(function() {
        increment(elem, finalVal);
      }, 40)
    }
  };



  const menu = document.getElementById('ne-menu');
  const menuToggle = document.getElementById('ne-menu-toggle');
  const menuClose = document.getElementById('ne-menu-close');
  const images = document.querySelectorAll('.img-overlay-wrapper');
  const bigimage = document.querySelector(".big-scale")
  const imagerx = document.querySelector('.imagerx');
  const imagery = document.querySelector('.imagery');
  const awardsection = document.querySelector('#awardsection');
  const aboutsection = document.querySelector('.bg-secondo');
  const emailimage = document.querySelector(".emailimage")
  const partnersection = document.querySelector(".partnersection");


  menuToggle.addEventListener('click', function() {
      menu.classList.add('active');
  });

  menuClose.addEventListener('click', function() {
      menu.classList.remove('active');
  });


    observer.observe(partnersection)
    observer.observe(emailimage);
    observer.observe(bigimage);
    Section1observer.observe(aboutsection);
    image1observer.observe(imagerx);
    image2observer.observe(imagery);
    numberobserver.observe(awardsection);

    images.forEach(elimage => {
      observer.observe(elimage);
      console.log("good")
    });
    





  
  
  