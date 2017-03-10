$(function() {
   $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/olkozhushko@gmail.com", 
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1><p>We will contact with you</p>')
        });
   }); 
});