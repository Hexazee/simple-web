var typed_name = new Typed('.jumbotron .container h3', {
    strings: ['" Welcome to... "'],
    typeSpeed: 50,
    // startDelay: 50,
    showCursor: false,
}); 

var typed_quotes = new Typed('.jumbotron .container h5', {
    strings: [' D8 ELECTRONIC'],
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 7000,
    showCursor: false,
    loop: true
});

var typed = new Typed('.jumbotron .container p', {
    strings: [
        '<b><i>"ALL ABOUT TECHNOLOGY."</i></b>',
    ],
    // smartBackspace: true 
    typeSpeed: 50,
    startDelay: 3000,
    backDelay: 3000,
    // delaySpeed: 5000,
    backSpeed: 20,
    // fadeOut: true,
    // smartBackspace: true,
    loop: true,
    showCursor: false,
});