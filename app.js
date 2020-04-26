let typed = new Typed('.Welcome', {
  strings: ['Hello', 'Hola', 'Bonjour', 'Namaste', 'Vanakkam'],
  typeSpeed: 50,
  backSpeed: 0,
  showCursor: false,
  fadeOut: true,
  loop: true
});

let typed1 = new Typed('.center', {
  strings: [
    'About Me',
    `Apart from programming, as a human being 😂, I love to binge-watch
  popular thriller series and movies. I am an Apple Fan Boy. Most
  importantly, I am busy being an introvert and just another guy with
  specks 🤓.`
  ],
  typeSpeed: 50,
  backSpeed: 0,
  showCursor: false,
  fadeOut: true,
  loop: true
});

particlesJS.load('particles', 'particles.json', function() {
  console.log('done');
});
