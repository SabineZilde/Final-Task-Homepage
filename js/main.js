$('#submit').on('click', function (event) {
    event.preventDefault();

    let username = $('#username').val();
    let message = $('#textarea').val();

    if (username === '' || message === '') {
        alert('Please fill both input fields!');
        return;
    };

    let datet = new Date();
    let month = datet.getMonth() + 1;
    let dateTime = datet.getDate() + '.' + month + '.' + datet.getFullYear() + ' ' + datet.getHours() + ':' + datet.getMinutes();

    const newMessage = `
        <div class="row">
            <div class="col">
                <strong>${username}</strong><small class="text-muted" id="datetime"> @ ${dateTime}</small>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col">
                ${message}
                <hr>
            </div>
        </div>
    `;

    $('#chat-window').append(newMessage);

    username = $('#username').val('');
    message = $('#textarea').val('');
});

// Checks if the psw lenght is ok
$('#validationCustomPassword').on('keyup', function () {
    const psw = $('#validationCustomPassword').val();
    if (psw.length >= 8) {
        $('.psw-too-short').prop('hidden', true)
    } else {
        $('.psw-too-short').prop('hidden', false)
    }
});

// Checks if the psw conf matches
$('#validationCustomPasswordConf').on('keyup', function () {
    const pswConf = $('#validationCustomPasswordConf').val();
    const psw = $('#validationCustomPassword').val();
    if (pswConf === psw) {
        $('.btn').prop('disabled', false);
        $('.psw-conf-fail').prop('hidden', true)
    } else {
        $('.btn').prop('disabled', true);
        $('.psw-conf-fail').prop('hidden', false)
    }
});

// Disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else (
            alert('Your registration was successful! Press OK to start using your account!'))

                form.classList.add('was-validated')
            }, false)
        })
})();

$(function () {
    $("#tabs").tabs({ event: "mouseover" });
});

$('.title').on('mouseover', function () {

})
