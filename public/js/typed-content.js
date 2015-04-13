$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    // set to whatever you want it to be
    var scroll_pos_test = 6000;

    if(y_scroll_pos > scroll_pos_test) {
        $("#typed-contact").typed({
            strings: ["Get in touch!", "You can reach me on liamdarmody@gmail.com"],
            typeSpeed: 30,
        });
    }
});