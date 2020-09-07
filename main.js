$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  $('.container').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });