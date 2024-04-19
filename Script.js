document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.nav-tabs a[href="#tab_sec1"]').click();
});

$(document).ready(function () {
    $(".navbar-nav .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight() // Adjust for fixed navbar height
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});