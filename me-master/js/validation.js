$(document).ready(function () {
    $("#contact-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4

            },
            lname: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true

            },
            message: {
                required: true
            },
        },
        messages: {
            fname: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 letters",
            },
            lname:{
                required:"Please enter your name",
                minlength: "Your name must be at least 3 letters",
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject",
            },
            message: {
                required: "Please enter the message"
            }
        },

        submitHandler: function (form) {
            
            form.submit();
        }

    })
})






