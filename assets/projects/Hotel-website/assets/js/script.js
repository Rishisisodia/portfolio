$('.banner').slick({
    dots: false,
    responsive: [{
        breakpoint: 992,
        settings: {
            autoplay: true,
            autoplaySpeed: 2000
        }
    }]
});

$(function() {
    $('#tab-system').mixItUp();
});

(function() {
    var placesAutocomplete = places({
        container: document.querySelector('#inputAddress')
    });

})();

PageScrollIndicator.createProgressBar("#scroll", "#body");

var date = $('#inputDate');
var firstname = $('#inputfirstname');
var lastname = $('#inputlastname');
var Address = $('#inputAddress');
var age = $('#inputage');
var inputEmail = $('#inputEmail');

SNButton.init('formbtn', {
    fields: ["inputfirstname", "inputlastname", "inputAddress", "inputage", "inputEmail", "inputDate"],
    enabletext: 'sign in',
    disabletext: 'sign in'
})

$('#formbtn').on('click', (e) => {
    e.preventDefault();
    var fullname = firstname.val() + ' ' + lastname.val();
    $('#namefield').html(fullname.toUpperCase());
    $('#addfield').html(Address.val().toUpperCase());
    $('#agefield').html(age.val().toUpperCase());
    $('#dobfield').html(date.val().toUpperCase() + ' ' + 'years');
    $('#mailfield').html(inputEmail.val().toUpperCase());
});