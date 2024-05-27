

const imagerx = document.querySelector('.imagerx');
const imagery = document.querySelector('.imagery');
const awardsection = document.querySelector('#awardsection');


document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('ne-menu');
  const menuToggle = document.getElementById('ne-menu-toggle');
  const menuClose = document.getElementById('ne-menu-close');

  menuToggle.addEventListener('click', function() {
      menu.classList.add('active');
  });

  menuClose.addEventListener('click', function() {
      menu.classList.remove('active');
  });
});


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

  const numberobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        increment("customers", 200);
        increment("projects", 285);
        increment("awards", 42);
      }
    });
  });

  image1observer.observe(imagerx);
  image2observer.observe(imagery);

  numberobserver.observe(awardsection);


  
  
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