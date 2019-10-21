// console.log('Global');

// #region Change Password
$('#btn_see_password').on('click', function () {
    if ($('#lihat_password').hasClass('fa-eye-slash')) {
        $('#lihat_password').removeClass('fa-eye-slash');
        $('#lihat_password').addClass('fa-eye');

        $('#old_password').attr('type', "text");
        $('#new_password').attr('type', "text");
        $('#verification_password').attr('type', "text");
    } else {
        $('#lihat_password').removeClass('fa-eye');
        $('#lihat_password').addClass('fa-eye-slash');

        $('#old_password').attr('type', "password");
        $('#new_password').attr('type', "password");
        $('#verification_password').attr('type', "password");
    }
});

$('#btn_change_password').on('click', function () {
    $('#old_password').val('');
    $('#new_password').val('');
    $('#verification_password').val('');
});

$('#old_password').on('keyup', function () {
    if ($('#old_password').val() == $('#current_password').val()) {
        $('#old_password').removeClass('is-invalid');
        $('#old_password').addClass('is-valid');
    } else {
        $('#old_password').removeClass('is-invalid');
        $('#old_password').addClass('is-invalid');
    }
});

$('#verification_password').on('keyup', function () {
    if ($('#verification_password').val() == $('#new_password').val()) {
        $('#verification_password').removeClass('is-invalid');
        $('#verification_password').addClass('is-valid');
    } else {
        $('#verification_password').removeClass('is-invalid');
        $('#verification_password').addClass('is-invalid');
    }
})

$('.btn_save_password').on('click', function (e) {
    if ($('#old_password').val() != '' && $('#new_password').val() != '' &&
        $('#verification_password').val() != '') {
        e.preventDefault();
        if ($('#old_password').val() == $('#current_password').val()) {
            if ($('#new_password').val() == $('#verification_password').val()) {

                $.ajax({
                    url: "http://" + URL_API + "/API-E-Money-App/public/users/ubahPassword/",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        User_Password: $('#verification_password').val(),
                        User_Id: $('#User_Id').val()
                    },
                    success: function (r) {
                        if (r.Status_Code == 200) {
                            Swal.fire({
                                type: 'success',
                                title: 'Berhasil',
                                text: r.Message
                            })
                            // $('#modal_tambah_role').modal('toggle');
                        } else {
                            Swal.fire({
                                type: 'error',
                                title: 'Oops!',
                                text: 'Maaf ubah password gagal!'
                            });
                        }
                        $('#modal_ubah_password').modal({
                            backdrop: false
                        });
                        $('#modal_ubah_password').modal('toggle');
                        $('#modal_ubah_password').modal('hide');
                    },
                    error: function () {
                        Swal.fire({
                            type: 'error',
                            title: 'Oops!',
                            text: 'Sorry, request is faied, please check your connection!'
                        });
                    }
                });
                $('#old_password').removeClass('is-invalid');
                $('#old_password').removeClass('is-valid');
                $('#new_password').removeClass('is-invalid');
                $('#new_password').removeClass('is-valid');
                $('#verification_password').removeClass('is-invalid');
                $('#verification_password').removeClass('is-valid');
            } else {
                $('#verification_password').addClass('is-invalid');
            }
        } else {
            $('#old_password').removeClass('is-invalid');
            $('#old_password').addClass('is-invalid');
        }
    }
});
// #endregion