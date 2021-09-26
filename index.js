let image1 = document.getElementsByClassName('parallaximg1');
let image2 = document.getElementsByClassName('parallaximg2');
let image3 = document.getElementsByClassName('parallaximg3');
let image4 = document.getElementsByClassName('parallaximg4');

new simpleParallax(image1, {
    orientation: 'up left',
    delay: '0.5',
    scale: '1.5'
} );

new simpleParallax(image2, {
    orientation: 'up right',
    delay: '0.5',
    scale: '1.5'
} );

new simpleParallax(image3, {
    orientation: 'up',
    delay: '0.5',
    scale: '1.5'
} );

new simpleParallax(image4, {
    orientation: 'down',
    delay: '0.5',
    scale: '1.5'
} );