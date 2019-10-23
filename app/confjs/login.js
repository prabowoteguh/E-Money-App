// ================= LOGIN FUNCTION =================

// console.log('OKLOG');

$('#btn_login').on('click', function (e) {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();

    if (email == '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Please provide an valid email!.'
        });
    } else if (password == '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Please provide an valid password!.'
        });
    } else {
        $.ajax({
            url: "http://" + URL_API + "/API-E-Money-App/public/login/",
            type: "POST",
            dataType: "JSON",
            data: {
                email: email,
                password: password
            },
            success: function (r) {
                if (r.Status_Code === 200) {
                    // ubah arrays menjadi json string
                    var data = JSON.stringify(r.Data_User);
                    // kirim data melalui input agar bisa masuk menjadi session
                    $('#data_session').val(data);
                    $('#login_form').attr('action', 'logincontroller/login');
                    $('#login_form').submit();

                } else {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: r.Message
                    })
                }
            }

        });

    }
});
// ================= /LOGIN FUNCTION =================