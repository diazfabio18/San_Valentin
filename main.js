$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  $('.container').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

$('.carousel').carousel({
  interval: false
});

  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  const typed = new Typed('.typed', {
    strings: ['2020', '2021','y más...'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    loop: true,
    backDelay: 1500,
    loopCount: false,
    ShowCursor: true
  });