// FOOTER

let aproposElements = document.querySelectorAll('.apropos-element');

aproposElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('open');
    })
});


// EMAILJS

(function(){
    emailjs.init("o8brHNQa7Y6i6e6Lh");
})();

function SendMail() {
    document.querySelector('.mail-send').classList.toggle("open");
    setTimeout(() => {
        document.querySelector('.mail-send').classList.toggle("checked");
    }, 3000)
    var params = {
        from_name : document.getElementById('name-input').value,
        from_tel : document.getElementById('tel-input').value,
        from_email : document.getElementById('email-input').value,
        message : document.getElementById('message-input').value
    }
    emailjs.send('service_56in1xy', 'template_cncb1km', params).then(function (res) {
        alert('Success! ' + res.status);
    });

    emailjs.send('service_56in1xy', 'template_ecn246n', params).then(function (res) {
        alert('Success! ' + res.status);
        document.location.reload();
    });
}

document.querySelector('.mail-send .cross').addEventListener('click', () => {
    document.querySelector('.mail-send').classList.toggle("open");
    document.querySelector('.mail-send').classList.toggle("checked");
})