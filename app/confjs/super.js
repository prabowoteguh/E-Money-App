// ================= SUPER ADMIN =====================

$('#main_dashboard').on('click', function () {
    nonactiveSidebar();
    $('#main_dashboard').addClass('mm-active');
});

// #region Fungsi Master Role
// ----------------------------- * ---------------------- //
$('#master_role').on('click', function () {
    nonactiveSidebar();
    $('#master_role').addClass('mm-active');
    $('#title_page').text('Master Data Role');
    $('#content').html('');

    refreshRole();
});

function Role() {
    refreshRole();
}

function refreshRole() {
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/roles/show/",
        type: "GET",
        dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.role;
                var table = '';

                for (let i = 0; i < data.length; i++) {
                    table += `
                        <tr>
                            <td class="text-center text-muted"> #` + (i + 1) + `</td>
                            <td>` + data[i].Role_Nama + `</td> 
                            <td>` + data[i].Role_Created_By + `</td> 
                            <td>` + data[i].Role_Created_Date + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Role_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Role_Deleted_Status == 0) ? 'Aktif' : 'Terhapus') + `</div>
                            </td> 
                            <td>` + data[i].Role_Deleted_By + `</td>
                            <td>` + ((data[i].Role_Deleted_Date == "0000-00-00 00:00:00") ? '' : data[i].Role_Deleted_Date) + `</td> 
                            <td class="text-center">
                                <button type="button" data-ishapus="` + data[i].Role_Deleted_Status + `" data-role="` + data[i].Role_Nama + `" data-id="` + data[i].Role_Id + `" class="btn btn-` + ((data[i].Role_Deleted_Status == 0) ? 'warning' : 'success') + ` btn-sm edit_role" id="edit_role"><i class="fa fa-` + ((data[i].Role_Deleted_Status == 0) ? 'pencil' : 'recycle') + `"></i> ` + ((data[i].Role_Deleted_Status == 0) ? 'Edit' : 'Restore') + `</button>
                                <button type="button" data-role="` + data[i].Role_Nama + `" data-id="` + data[i].Role_Id + `" class="btn btn-danger btn-sm hapus_role" ` + ((data[i].Role_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }

                $('#content').html(`
                    <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Role
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_role"><i class="fa fa-plus"></i> Tambah </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div class="table-responsive">
                                        <table id="table_role" class="display nowrap align-middle mb-0 table  table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama Role</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ` + table + `
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama Role</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th>
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="d-block text-center card-footer">
                                <div class="text-center"> <h5></h5> </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);

            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: r.Message
                });
            }
            $('#table_role').DataTable();

            // edit ROle
            $('.edit_role').on('click', function () {
                // data-toggle="modal" data-target="#modal_tambah_role"
                var Role_Nama = $(this).data('role');
                var Role_Id = $(this).data('id');

                if ($(this).data('ishapus') == 1) {
                    Swal.fire({
                        title: 'Apakah anda yakin?',
                        text: "Data " + Role_Nama + " telah terhapus, apakah anda yakin ingin mengembalikannya?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya, kembalikan!'
                    }).then((result) => {
                        if (result.value) {
                            $.ajax({
                                url: "http://" + URL_API + "/API-E-Money-App/public/roles/recover/",
                                type: "POST",
                                // dataType: "JSON",
                                contentType: "application/x-www-form-urlencoded",
                                data: {
                                    Role_Id: $(this).data('id')
                                },
                                success: function (r) {
                                    if (r.Status_Code == 200) {
                                        Swal.fire({
                                            type: 'success',
                                            title: 'Berhasil',
                                            text: r.Message
                                        });
                                    } else {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: r.Message
                                        });
                                    }
                                    Role();
                                },
                                error: function () {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: 'Sorry, your request is failed, please check your connection!'
                                    });
                                }
                            });
                            // ajax
                        }
                    })
                } else if ($(this).data('ishapus') == 0) {
                    $('#modal_edit_role').modal({
                        backdrop: false
                    });
                    $('#modal_edit_role').modal('show');
                    $('#modal_edit_role').modal('toggle');
                    $('#Role_Nama_Edit').val(Role_Nama);
                    console.log('OK');
                    $('.btn_update_role').on('click', function (e) {
                        var role_update = $('#Role_Nama_Edit').val();
                        var Role_Updated_By = $('#Role_Updated_By').val();
                        if (role_update != '') {
                            e.preventDefault();
                            $.ajax({
                                url: "http://" + URL_API + "/API-E-Money-App/public/roles/update/",
                                type: "POST",
                                // dataType: "JSON",
                                contentType: "application/x-www-form-urlencoded",
                                data: {
                                    Role_Id: Role_Id,
                                    Role_Nama: role_update,
                                    Role_Updated_By: Role_Updated_By
                                },
                                success: function (r) {
                                    if (r.Status_Code == 200) {
                                        Swal.fire({
                                            type: 'success',
                                            title: 'Berhasil',
                                            text: r.Message
                                        });
                                    } else {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: r.Message
                                        });
                                    }
                                    $('#Role_Nama_Edit').val('');
                                    $('#modal_edit_role').modal('hide');
                                    Role();
                                }
                            });
                        } else {
                            //
                        }
                    });
                }

            });
            // --Edit Role

            // Delete Role
            $('.hapus_role').on('click', function () {
                Swal.fire({
                    title: 'Apakah anda yakin?',
                    text: "Data " + $(this).data('role') + "(" + $(this).data('id') + ") akan terhapus oleh " + $(this).data('user') + "!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, hapus!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/roles/delete/",
                            type: "POST",
                            // dataType: "JSON",
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                Role_Id: $(this).data('id'),
                                Role_Deleted_By: $('#Role_Updated_By').val()
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    Swal.fire({
                                        type: 'success',
                                        title: 'Berhasil',
                                        text: r.Message
                                    });
                                } else {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: r.Message
                                    });
                                }
                                Role();
                            }
                        });
                    }
                })
            });
            // Delete Role ---
        }
    });
}

$('.btn_simpan_role').on('click', function (e) {
    var Created_By = ($('#Created_By').val());
    var Role_Nama = ($('#Role_Nama').val());
    if (Role_Nama != '') {
        e.preventDefault();
        // console.log(Role_Nama);
        $.ajax({
            url: "http://" + URL_API + "/API-E-Money-App/public/roles/insert/",
            type: "POST",
            dataType: "JSON",
            data: {
                Role_Nama: Role_Nama,
                Role_Created_By: Created_By
            },
            success: function (r) {
                if (r.Status_Code == 200) {
                    Role_Nama = '';
                    Swal.fire({
                        type: 'success',
                        title: 'Berhasil',
                        text: r.Message
                    })
                    refreshRole();
                    $('#Role_Nama').val('');
                    // $('#modal_tambah_role').modal('toggle');
                    // $('#modal_tambah_role').modal('hide');
                } else {
                    //
                }
            }
        });
    } else {
        //
    }
});
// ----------------------------- * ---------------------- //
// #endregion End of Fungsi Master Role


//#region Fungsi Master User
// ----------------------------- * ---------------------- //
$('#master_users').on('click', function () {
    nonactiveSidebar();
    $('#master_users').addClass('mm-active');
    $('#title_page').text('Master Data Users');
    $('#content').html('');
    refreshUsers();
    SelectedOptionRole();
});

function User() {
    refreshUsers();
}
var User_Foto = '';

function refreshUsers() {
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/users/show/",
        type: "GET",
        // dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.users;
                var table = '';

                for (let i = 0; i < data.length; i++) {
                    table += `
                        <tr>
                            <td class="text-center text-muted"> #` + (i + 1) + `</td>
                            <td>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                                <img width="40" class="rounded-circle" src="` + BASE_URL + `assets/images/avatars/` + ((data[i].User_Foto == '') ? 'student.png' : data[i].User_Foto) + `" alt="avatar">
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">` + data[i].User_Nama + `</div>
                                            <div class="widget-subheading opacity-7">` + data[i].User_Email + `</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>` + data[i].Role_Nama + `</td> 
                            <td class="text-center"><i class="fa fa-2x fa-` + ((data[i].User_Kelamin == 1) ? 'mars' : 'venus') + `"></i></td> 
                            <td>` + data[i].User_Created_By + `</td> 
                            <td>` + data[i].User_Created_Date + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].User_Status_Aktif == 1) ? 'success' : 'danger') + `">` + ((data[i].User_Status_Aktif == 1) ? 'Aktif' : 'Tidak Aktif') + `</div>
                            </td> 
                            <td>` + data[i].User_Deleted_By + `</td>
                            <td>` + ((data[i].User_Deleted_Date == "0000-00-00 00:00:00") ? '' : data[i].User_Deleted_Date) + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].User_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].User_Deleted_Status == 0) ? 'Terdaftar' : 'Terhapus') + `</div>
                            </td> 
                            <td class="text-center">
                                <button type="button" data-user="` + data[i].User_Nama + `" data-status="` + data[i].User_Status_Aktif + `" data-id="` + data[i].User_Id + `" class="btn btn-` + ((data[i].User_Deleted_Status == 0) ? ((data[i].User_Status_Aktif == 1) ? 'danger' : 'success') : 'success') + ` btn-sm aktif_user" ` + ((data[i].User_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-power-off"></i> ` + ((data[i].User_Deleted_Status == 0) ? ((data[i].User_Status_Aktif == 1) ? 'Nonaktifkan' : 'Aktifkan') : 'Aktifkan') + `</button>
                                <button type="button" data-user="` + data[i].User_Nama + `" data-ishapus="` + data[i].User_Deleted_Status + `" data-id="` + data[i].User_Id + `" class="btn btn-` + ((data[i].User_Deleted_Status == 0) ? 'warning' : 'success') + ` btn-sm edit_user"><i class="fa fa-` + ((data[i].User_Deleted_Status == 0) ? 'pencil' : 'recycle') + `"></i> ` + ((data[i].User_Deleted_Status == 0) ? 'Edit' : 'Restore') + `</button>
                                <button type="button" data-user="` + data[i].User_Nama + `" data-id="` + data[i].User_Id + `" class="btn btn-danger btn-sm hapus_user" ` + ((data[i].User_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }

                $('#content').html(`
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Role
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" id="btn_tambah_user" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_user"><i class="fa fa-plus"></i> Tambah User</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div class="table-responsive">
                                        <table id="table_user" class="display nowrap align-middle mb-0 table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama User</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Kelamin</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col"  class="text-center">Status Hapus</th> 
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ` + table + `
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama User</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Kelamin</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col"  class="text-center">Status Hapus</th> 
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="d-block text-center card-footer">
                                <div class="text-center"> <h5></h5> </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);

            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: r.Message
                });
            }

            // data table
            $('#table_user').DataTable();

            // edit User
            $('.edit_user').on('click', function () {
                // data-toggle="modal" data-target="#modal_tambah_role"
                var User_Nama = $(this).data('user');
                var User_Id = $(this).data('id');

                if ($(this).data('ishapus') == 1) {
                    Swal.fire({
                        title: 'Apakah anda yakin?',
                        text: "Data " + User_Nama + " telah terhapus, apakah anda yakin ingin mengembalikannya?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya, kembalikan!'
                    }).then((result) => {
                        if (result.value) {
                            $.ajax({
                                url: "http://" + URL_API + "/API-E-Money-App/public/users/recover/",
                                type: "POST",
                                // dataType: "JSON",
                                contentType: "application/x-www-form-urlencoded",
                                data: {
                                    User_Id: User_Id
                                },
                                success: function (r) {
                                    if (r.Status_Code == 200) {
                                        Swal.fire({
                                            type: 'success',
                                            title: 'Berhasil',
                                            text: r.Message
                                        });
                                    } else {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: r.Message
                                        });
                                    }
                                    User();
                                },
                                error: function () {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: "Sorry, request is failed, please check your connection!"
                                    });
                                }
                            });
                            // ajax
                        }
                    })
                } else if ($(this).data('ishapus') == 0) {
                    $('#modal_user_label').text(' Edit User ');
                    $('.btn_tambah_user').text('Simpan Perubahan');

                    $.ajax({
                        url: "http://" + URL_API + "/API-E-Money-App/public/users/getDataById/",
                        type: "POST",
                        // dataType: "JSON",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            User_Id: User_Id
                        },
                        success: function (r) {
                            if (r.Status_Code == 200) {
                                $('#modal_tambah_user').modal({
                                    backdrop: false
                                });
                                $('#modal_tambah_user').modal('toggle');
                                $('#modal_tambah_user').modal('show');
                                var user = r.User;
                                // Pengisian data dari response
                                $('#User_Email').val(user.User_Email);
                                // $('#User_Email').prop('readonly', true);
                                $('#User_Password').val(user.User_Password);
                                // $('#User_Password').prop('readonly', true);
                                $('#User_Nama').val(user.User_Nama);
                                $('#User_Role_Id').val(user.User_Role_Id);
                                $('#User_No_Hp').val(user.User_No_Hp);
                                // $('#User_Foto').val(user.User_Foto);
                                $("input[type='radio'][name='User_Kelamin'][value='" + user.User_Kelamin + "']").prop('checked', true);
                                $('#label_user_foto').text(user.User_Foto);
                                $('#avatar').attr('src', "assets/images/avatars/" + user.User_Foto);
                                // ============================
                                console.log(r.User);
                            } else {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: r.Message
                                });
                            }
                            User();
                        },
                        error: function () {
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: "Sorry, request is failed, please check your connection!"
                            });
                        }
                    });
                    // ajax get data user by id


                    $('.btn_tambah_user').on('click', function (e) {
                        if ($('.btn_tambah_user').text() == 'Simpan Perubahan') {
                            if ($('#User_Email').val() != '' && $('#User_Password').val() != '' && $('#User_Nama').val() != '' && $('#User_Role_Id').val() != '') {

                                e.preventDefault();
                                uploadFile('User_Foto', 'homecontroller/uploadFile');

                                $.ajax({
                                    url: "http://" + URL_API + "/API-E-Money-App/public/users/update/",
                                    type: "POST",
                                    // dataType: "JSON",
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        User_Email: $('#User_Email').val(),
                                        User_Password: $('#User_Password').val(),
                                        User_Nama: $('#User_Nama').val(),
                                        User_Kelamin: $("input[type='radio'][name='User_Kelamin']:checked").val(),
                                        User_Foto: ((User_Foto == '') ? '' : User_Foto),
                                        User_No_Hp: (($('#User_No_Hp').val() == '') ? '' : $('#User_No_Hp').val()),
                                        User_Role_Id: $('#User_Role_Id').val(),
                                        User_Updated_By: $('#User_By').val(),
                                        User_Id: User_Id
                                    },
                                    success: function (r) {
                                        if (r.Status_Code == 200) {
                                            Swal.fire({
                                                type: 'success',
                                                title: 'Berhasil',
                                                text: r.Message
                                            });
                                        } else {
                                            Swal.fire({
                                                type: 'error',
                                                title: 'Oops...',
                                                text: r.Message
                                            });
                                        }
                                        clearInputUser();
                                        $('#modal_tambah_user').modal('toggle');
                                        $('#modal_tambah_user').modal('hide');
                                        User();
                                    },
                                    error: function () {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: "Sorry, request is failed, please check your connection!"
                                        });
                                    }
                                });
                                // Ajax update user =====
                            }
                        }
                    });
                }

            });
            // --Edit User

            // Delete User
            $('.hapus_user').on('click', function () {
                Swal.fire({
                    title: 'Apakah anda yakin?',
                    text: "Data " + $(this).data('user') + "(" + $(this).data('id') + ") akan terhapus!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, hapus!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/users/delete/",
                            type: "POST",
                            // dataType: "JSON",
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                User_Id: $(this).data('id'),
                                User_Deleted_By: $('#Role_Updated_By').val()
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    Swal.fire({
                                        type: 'success',
                                        title: 'Berhasil',
                                        text: r.Message
                                    });
                                } else {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: r.Message
                                    });
                                }
                                User();
                            },
                            error: function () {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: "sorry, request is failed, please check your connection!"
                                });
                            }
                        });
                    }
                })
            });
            // Delete User ---

            // Ubah status aktif User
            $('.aktif_user').on('click', function () {
                Swal.fire({
                    title: 'Apakah anda yakin?',
                    text: "Data " + $(this).data('user') + " akan " + (($(this).data('status') == 1) ? 'dinonaktifkan' : 'diaktifkan') + "!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, ' + (($(this).data('status') == 1) ? 'nonaktifkan' : 'aktifkan') + '!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/users/ubahStatusAktif/",
                            type: "POST",
                            // dataType: "JSON",
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                User_Id: $(this).data('id'),
                                User_Status_Aktif: $(this).data('status')
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    Swal.fire({
                                        type: 'success',
                                        title: 'Berhasil',
                                        text: r.Message
                                    });
                                } else {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: r.Message
                                    });
                                }
                                User();
                            },
                            error: function () {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: "sorry, request is failed, please check your connection!"
                                });
                            }
                        });
                    }
                })
            });
            // Ubah status aktif User ---

            // Btn Tambah User

            //--Btn Tambah USer
        }

    });
}

function SelectedOptionRole() {
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/roles/",
        type: "GET",
        dataType: "JSON",
        data: {
            //
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.role;
                var options = '<option value="">-- Pilih Role --</option>';
                for (let i = 0; i < data.length; i++) {
                    options += `<option value="` + data[i].Role_Id + `">` + data[i].Role_Nama + `</option>
                                `;
                }
                // console.log(r.role);
                // console.log(options);
                $('#User_Role_Id').html(options);
            } else {
                // Swal.fire({
                //     type: 'error',
                //     title: 'Oops...',
                //     text: "sorry, request is failed, please check your connection!"
                // });
                $('#User_Role_Id').html('<option value="" disabled>Tidak ada data</option>');
            }
            User();
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: "sorry, request is failed, please check your connection!"
            });
        }
    });
}

// Untuk menampilkan foto sebelum di upload
function readURL(input, idFoto) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#' + idFoto).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
// =======================================

// Upload file foto
function uploadFile(idFile, URL) {
    var fd = new FormData();
    var files = $('#' + idFile)[0].files[0];
    fd.append('file', files);

    $.ajax({
        url: BASE_URL + URL,
        type: 'POST',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response != 0) {
                // $("#img").attr("src", response);
                // $(".preview img").show(); // Display image element
            } else {
                alert('file not uploaded');
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Oops..',
                text: 'Sorry, your request to upload failed, please check your connection!'
            });
        }
    });
}
// ====================================

// Clear input User
function clearInputUser(params) {
    $('#User_Email').val('');
    $('#User_Password').val('');
    $('#User_Nama').val('');
    $('#User_Role_Id').val('');
    $('#User_No_Hp').val('');
    $('#User_Foto').val('');
    $("input[type='radio'][name='User_Kelamin']").prop('checked', false);
    $('#label_user_foto').text('Pilih foto..');
    $('#avatar').attr('src', '');
}
// ====================================

// modal tambah user
$('#btn_tambah_user').on('click', function () {
    $('#modal_user_label').text(' Edit User ');
    $('.btn_tambah_user').text('Simpan');
    clearInputUser();
})
// ====================================

// Hapus konten modal input user
$('.btn_hapus_konten').on('click', function () {
    clearInputUser();
})
// ===================================

// Get file name Foto
$('#User_Foto').on('change', function () {
    User_Foto = $('#User_Foto').val();
    if (User_Foto.substring(3, 11) == 'fakepath') {
        User_Foto = User_Foto.substring(12);
    }
    $('#label_user_foto').text(User_Foto);
    readURL(this, 'avatar');
});
// =====================================

// Tambah user
$('.btn_tambah_user').on('click', function (e) {
    // console.log($("input[type='radio'][name='User_Kelamin']:checked").val());
    if ($('.btn_tambah_user').text() == 'Simpan') {
        if ($('#User_Email').val() != '' &&
            $('#User_Password').val() != '' &&
            $('#User_Nama').val() != '' &&
            $('#User_Role_Id').val() != '') {

            e.preventDefault();
            uploadFile('User_Foto', 'homecontroller/uploadFile');
            $.ajax({
                url: "http://" + URL_API + "/API-E-Money-App/public/users/insert/",
                type: "POST",
                dataType: "JSON",
                data: {
                    User_Email: $('#User_Email').val(),
                    User_Password: $('#User_Password').val(),
                    User_Nama: $('#User_Nama').val(),
                    User_Kelamin: $("input[type='radio'][name='User_Kelamin']:checked").val(),
                    User_Foto: ((User_Foto == '') ? '' : User_Foto),
                    User_No_Hp: (($('#User_No_Hp').val() == '') ? '' : $('#User_No_Hp').val()),
                    User_Role_Id: $('#User_Role_Id').val(),
                    User_Created_By: $('#User_By').val()
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
                            text: 'Maaf input data gagal!'
                        });
                    }
                    // $('#modal_tambah_user').modal('hide');
                    clearInputUser();
                    User();
                },
                error: function () {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops!',
                        text: 'Sorry, request is faied, please check your connection!'
                    })
                }
            });
        }
    }

});
// #endregion ===================


// #region Master Data Mahasiswa

$('#master_mahasiswa').on('click', function () {
    nonactiveSidebar();
    $('#master_mahasiswa').addClass('mm-active');
    $('#title_page').text('Master Data Mahasiswa');
    $('#content').html('');

    Mahasiswa();
});

function Mahasiswa() {
    refreshMahasiswa();
}
var Mahasiswa_Foto = '';
var Mahasiswa_Qr_Code = '';

function refreshMahasiswa() {
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/show",
        type: "GET",
        // dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.Mahasiswa;
                var table = '';

                for (let i = 0; i < data.length; i++) {
                    table += `
                        <tr>
                            <td class="text-center text-muted"> #` + (i + 1) + `</td>
                            <td>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                                <img width="40" class="rounded-circle" src="` + BASE_URL + `assets/images/avatars/` + ((data[i].Mahasiswa_Foto == '') ? 'student.png' : data[i].Mahasiswa_Foto) + `" alt="avatar">
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">` + data[i].Mahasiswa_Nama + `</div>
                                            <div class="widget-subheading opacity-7">` + data[i].Mahasiswa_Npm + `</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>` + data[i].Mahasiswa_Jurusan + ` - ` + data[i].Mahasiswa_Tahun_Angkatan + `</td> 
                            <td>` + data[i].Mahasiswa_Created_By + `</td> 
                            <td>` + data[i].Mahasiswa_Created_Date + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Mahasiswa_Status_Aktif == 1) ? 'success' : 'danger') + `">` + ((data[i].Mahasiswa_Status_Aktif == 1) ? 'Aktif' : 'Tidak Aktif') + `</div>
                            </td> 
                            <td>` + data[i].Mahasiswa_Deleted_By + `</td>
                            <td>` + ((data[i].Mahasiswa_Deleted_Date == "0000-00-00 00:00:00") ? '' : data[i].Mahasiswa_Deleted_Date) + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'Terdaftar' : 'Terhapus') + `</div>
                            </td> 
                            <td class="text-center">
                                <button type="button" data-mahasiswa="` + data[i].Mahasiswa_Nama + `" data-status="` + data[i].Mahasiswa_Status_Aktif + `" data-id="` + data[i].Mahasiswa_Id + `" class="btn btn-` + ((data[i].Mahasiswa_Deleted_Status == 0) ? ((data[i].Mahasiswa_Status_Aktif == 1) ? 'danger' : 'success') : 'success') + ` btn-sm aktif_mahasiswa" ` + ((data[i].Mahasiswa_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-power-off"></i> ` + ((data[i].Mahasiswa_Deleted_Status == 0) ? ((data[i].Mahasiswa_Status_Aktif == 1) ? 'Nonaktifkan' : 'Aktifkan') : 'Aktifkan') + `</button>
                                <button type="button" data-mahasiswa="` + data[i].Mahasiswa_Nama + `" data-ishapus="` + data[i].Mahasiswa_Deleted_Status + `" data-id="` + data[i].Mahasiswa_Id + `" class="btn btn-` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'warning' : 'success') + ` btn-sm edit_mahasiswa"><i class="fa fa-` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'pencil' : 'recycle') + `"></i> ` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'Edit' : 'Restore') + `</button>
                                <button type="button" data-mahasiswa="` + data[i].Mahasiswa_Nama + `" data-id="` + data[i].Mahasiswa_Id + `" class="btn btn-danger btn-sm hapus_mahasiswa" ` + ((data[i].Mahasiswa_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }

                $('#content').html(`
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Role
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" id="btn_tambah_mahasiswa" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_mahasiswa"><i class="fa fa-plus"></i> Tambah Data Mahasiswa</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div class="table-responsive">
                                        <table id="table_mahasiswa" class="display nowrap align-middle mb-0 table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama Mahasiswa</th>
                                                    <th scope="col">Jurusan</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col"  class="text-center">Status Hapus</th> 
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ` + table + `
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama Mahasiswa</th>
                                                    <th scope="col">Jurusan</th>
                                                    <th scope="col">Created By</th>
                                                    <th scope="col">Created Date</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <th scope="col">Deleted By</th>
                                                    <th scope="col">Deleted Date</th>
                                                    <th scope="col"  class="text-center">Status Hapus</th> 
                                                    <th scope="col" class="text-center">Aksi</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="d-block text-center card-footer">
                                <div class="text-center"> <h5></h5> </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);

            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: r.Message
                });
            }

            // data table
            $('#table_mahasiswa').DataTable();

            // edit Mahasiswa
            $('.edit_mahasiswa').on('click', function () {
                // data-toggle="modal" data-target="#modal_tambah_role"
                var Mahasiswa_Nama = $(this).data('mahasiswa');
                var Mahasiswa_Id = $(this).data('id');

                if ($(this).data('ishapus') == 1) {
                    Swal.fire({
                        title: 'Apakah anda yakin?',
                        text: "Data " + Mahasiswa_Nama + " telah terhapus, apakah anda yakin ingin mengembalikannya?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya, kembalikan!'
                    }).then((result) => {
                        if (result.value) {
                            $.ajax({
                                url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/recover/",
                                type: "POST",
                                // dataType: "JSON",
                                contentType: "application/x-www-form-urlencoded",
                                data: {
                                    Mahasiswa_Id: Mahasiswa_Id
                                },
                                success: function (r) {
                                    if (r.Status_Code == 200) {
                                        Swal.fire({
                                            type: 'success',
                                            title: 'Berhasil',
                                            text: r.Message
                                        });
                                    } else {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: r.Message
                                        });
                                    }
                                    Mahasiswa();
                                },
                                error: function () {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: "Sorry, request is failed, please check your connection!"
                                    });
                                }
                            });
                            // ajax
                        }
                    })
                } else if ($(this).data('ishapus') == 0) {
                    $('#modal_mahasiswa_label').text(' Edit Mahasiswa ');
                    $('.btn_tambah_mahasiswa').text('Simpan Perubahan');

                    // console.log('OK');
                    $.ajax({
                        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/getDataById/",
                        type: "POST",
                        dataType: "JSON",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            Mahasiswa_Id: Mahasiswa_Id
                        },
                        success: function (r) {
                            if (r.Status_Code == 200) {
                                $('#Mahasiswa_Tahun_Angkatan').prop('disabled', true);
                                $('#modal_tambah_mahasiswa').modal({
                                    backdrop: false
                                });
                                $('#modal_tambah_mahasiswa').modal('toggle');
                                $('#modal_tambah_mahasiswa').modal('show');
                                var Mahasiswa = r.Mahasiswa;
                                // Pengisian data dari response
                                $('#Mahasiswa_Npm').val(Mahasiswa.Mahasiswa_Npm);
                                $('#Mahasiswa_Nama').val(Mahasiswa.Mahasiswa_Nama);
                                $('#Mahasiswa_Jurusan>option:selected').text(Mahasiswa.Mahasiswa_Jurusan);
                                $('#Mahasiswa_Tahun_Angkatan').val(Mahasiswa.Mahasiswa_Tahun_Angkatan);
                                $('#label_mahasiswa_foto').text(Mahasiswa.Mahasiswa_Foto);
                                $('#avatar_mahasiswa').attr('src', "assets/images/avatars/" + Mahasiswa.Mahasiswa_Foto);
                                // ============================
                                // console.log(r.Mahasiswa);
                            } else {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: r.Message
                                });
                            }
                        },
                        error: function () {
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: "Sorry, request is failed, please check your connection!"
                            });
                        }
                    });
                    // ajax get data mahasiswa by id

                    //simpan data setelah edit
                    $('.btn_tambah_mahasiswa').on('click', function (e) {
                        if ($('.btn_tambah_mahasiswa').text() == 'Simpan Perubahan') {
                            if ($('#Mahasiswa_Npm').val() != '' && $('#Mahasiswa_Nama').val() != '' && $('#Mahasiswa_Jurusan option:selected').html() != '' && $('#Mahasiswa_Tahun_Angkatan').val() != '') {

                                e.preventDefault();
                                uploadFile('Mahasiswa_Foto', 'homecontroller/uploadFile');

                                $.ajax({
                                    url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/update/",
                                    type: "POST",
                                    dataType: "JSON",
                                    contentType: "application/x-www-form-urlencoded",
                                    data: {
                                        Mahasiswa_Nama: $('#Mahasiswa_Nama').val(),
                                        Mahasiswa_Jurusan: $('#Mahasiswa_Jurusan option:selected').html(),
                                        // Mahasiswa_Tahun_Angkatan: $('#Mahasiswa_Tahun_Angkatan').val(),
                                        Mahasiswa_Foto: ((Mahasiswa_Foto == '') ? '' : Mahasiswa_Foto),
                                        Mahasiswa_Updated_By: $('#Mahasiswa_Deleted_By').val(),
                                        Mahasiswa_Id: Mahasiswa_Id
                                    },
                                    success: function (r) {
                                        if (r.Status_Code == 200) {
                                            Swal.fire({
                                                type: 'success',
                                                title: 'Berhasil',
                                                text: r.Message
                                            });
                                        } else {
                                            Swal.fire({
                                                type: 'error',
                                                title: 'Oops...',
                                                text: r.Message
                                            });
                                        }
                                        clearInputMahasiswa();
                                        $('#modal_tambah_mahasiswa').modal('toggle');
                                        $('#modal_tambah_mahasiswa').modal('hide');
                                        Mahasiswa();
                                    },
                                    error: function () {
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: "Sorry, request is failed, please check your connection!"
                                        });
                                    }
                                });
                                // Ajax update user =====
                            }
                        }
                    });
                    //========================
                }

            });
            // --Edit Mahasiswa

            // Delete Mahasiswa
            $('.hapus_mahasiswa').on('click', function () {
                Swal.fire({
                    title: 'Apakah anda yakin?',
                    text: "Data " + $(this).data('mahasiswa') + "( " + $(this).data('id') + " ) akan terhapus!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, hapus!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/delete/",
                            type: "POST",
                            dataType: "JSON",
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                Mahasiswa_Id: $(this).data('id'),
                                Mahasiswa_Deleted_By: $('#Mahasiswa_Deleted_By').val()
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    Swal.fire({
                                        type: 'success',
                                        title: 'Berhasil',
                                        text: r.Message
                                    });
                                } else {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: r.Message
                                    });
                                }
                                Mahasiswa();
                            },
                            error: function () {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: "sorry, request is failed, please check your connection!"
                                });
                            }
                        });
                    }
                })
            });
            // Delete Mahasiswa ---

            // Ubah status aktif Mahasiswa
            $('.aktif_mahasiswa').on('click', function () {
                Swal.fire({
                    title: 'Apakah anda yakin?',
                    text: "Data " + $(this).data('mahasiswa') + " akan " + (($(this).data('status') == 1) ? 'dinonaktifkan' : 'diaktifkan') + "!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, ' + (($(this).data('status') == 1) ? 'nonaktifkan' : 'aktifkan') + '!'
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/ubahStatusAktif/",
                            type: "POST",
                            // dataType: "JSON",
                            contentType: "application/x-www-form-urlencoded",
                            data: {
                                Mahasiswa_Id: $(this).data('id'),
                                Mahasiswa_Status_Aktif: $(this).data('status')
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    Swal.fire({
                                        type: 'success',
                                        title: 'Berhasil',
                                        text: r.Message
                                    });
                                } else {
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: r.Message
                                    });
                                }
                                Mahasiswa();
                            },
                            error: function () {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: "sorry, request is failed, please check your connection!"
                                });
                            }
                        });
                    }
                })
            });
            // Ubah status aktif Mahasiswa ---

            // modal tambah Mahasiswa
            $('#btn_tambah_mahasiswa').on('click', function () {
                $('#modal_mahasiswa_label').text(' Tambah Data Mahasiswa ');
                $('.btn_tambah_mahasiswa').text('Simpan');
                clearInputMahasiswa();
            })
            // ====================================
        }

    });
}

// Untuk menampilkan foto sebelum di upload
function readURL(input, idFoto) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#' + idFoto).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// Upload file foto
function uploadFile(idFile, URL) {
    var fd = new FormData();
    var files = $('#' + idFile)[0].files[0];
    fd.append('file', files);

    $.ajax({
        url: BASE_URL + URL,
        type: 'POST',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response != 0) {
                // $("#img").attr("src", response);
                // $(".preview img").show(); // Display image element
            } else {
                alert('file not uploaded');
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Oops..',
                text: 'Sorry, your request to upload failed, please check your connection!'
            });
        }
    });
}

// Clear input User
function clearInputMahasiswa() {
    $('#Mahasiswa_Npm').val('');
    $('#Mahasiswa_Nama').val('');
    $('#Mahasiswa_Jurusan').val('');
    $('#Mahasiswa_Tahun_Angkatan').val('');
    $('#Mahasiswa_Foto').val('');
    $('#label_mahasiswa_foto').text('Pilih foto..');
    $('#avatar_mahasiswa').attr('src', '');
    $('#Mahasiswa_Tahun_Angkatan').prop('disabled', false);
}
// ====================================

// Get NPM Automatic
$('#Mahasiswa_Jurusan').on('change', function () {
    var Mahasiswa_Jurusan = ($("#Mahasiswa_Jurusan option:selected").html());
    var Mahasiswa_Tahun_Angkatan = $('#Mahasiswa_Tahun_Angkatan').val();

    // ambil urutan npm dari jurusan dan tahun angkatan
    var Npm = '';
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/getDataNpm/",
        type: "POST",
        dataType: "JSON",
        data: {
            Mahasiswa_Jurusan: Mahasiswa_Jurusan,
            Mahasiswa_Tahun_Angkatan: $('#Mahasiswa_Tahun_Angkatan').val()
        },
        success: function (r) {
            Urut = (parseInt(r.Mahasiswa.Npm) + 1);
            Npm = Urut.toString().padStart(3, "0");
            // console.log(Npm);
            $('#Mahasiswa_Npm').val($('#Mahasiswa_Jurusan').val() + Mahasiswa_Tahun_Angkatan.substring(2) + Npm);
        }
    });

});

$('#Mahasiswa_Tahun_Angkatan').on('change', function () {
    var Mahasiswa_Jurusan = ($("#Mahasiswa_Jurusan option:selected").html());
    var Mahasiswa_Tahun_Angkatan = ($('#Mahasiswa_Tahun_Angkatan').val()).substring(2);

    // ambil urutan npm dari jurusan dan tahun angkatan
    var Npm = '';
    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/getDataNpm/",
        type: "POST",
        dataType: "JSON",
        data: {
            Mahasiswa_Jurusan: Mahasiswa_Jurusan,
            Mahasiswa_Tahun_Angkatan: $('#Mahasiswa_Tahun_Angkatan').val()
        },
        success: function (r) {
            Urut = (parseInt(r.Mahasiswa.Npm) + 1);
            Npm = Urut.toString().padStart(3, "0");
            // console.log(Npm);
            $('#Mahasiswa_Npm').val($('#Mahasiswa_Jurusan').val() + Mahasiswa_Tahun_Angkatan + Npm);
        }
    });
});
// ====================================

// Hapus konten modal input user
$('.btn_hapus_konten').on('click', function () {
    clearInputMahasiswa();
})
// ===================================

// Get file name Foto
$('#Mahasiswa_Foto').on('change', function () {
    Mahasiswa_Foto = $('#Mahasiswa_Foto').val();
    if (Mahasiswa_Foto.substring(3, 11) == 'fakepath') {
        Mahasiswa_Foto = Mahasiswa_Foto.substring(12);
    }
    $('#label_mahasiswa_foto').text(Mahasiswa_Foto);
    readURL(this, 'avatar_mahasiswa');
});
// =====================================

// Tambah Mahasiswa
$('.btn_tambah_mahasiswa').on('click', function (e) {
    // console.log($("input[type='radio'][name='User_Kelamin']:checked").val());
    if ($('.btn_tambah_mahasiswa').text() == 'Simpan') {
        if ($('#Mahasiswa_Npm').val() != '' &&
            $('#Mahasiswa_Nama').val() != '' &&
            $('#Mahasiswa_Jurusan').val() != '' &&
            $('#Mahasiswa_Tahun_Angkatan').val() != '') {

            e.preventDefault();
            uploadFile('Mahasiswa_Foto', 'homecontroller/uploadFile');
            $.ajax({
                url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/insert/",
                type: "POST",
                dataType: "JSON",
                data: {
                    Mahasiswa_Npm: $('#Mahasiswa_Npm').val(),
                    Mahasiswa_Nama: $('#Mahasiswa_Nama').val(),
                    Mahasiswa_Jurusan: $("#Mahasiswa_Jurusan option:selected").html(),
                    Mahasiswa_Foto: ((Mahasiswa_Foto == '') ? '' : Mahasiswa_Foto),
                    Mahasiswa_Tahun_Angkatan: $('#Mahasiswa_Tahun_Angkatan').val(),
                    Mahasiswa_Created_By: $('#Mahasiswa_Deleted_By').val()
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
                            text: 'Maaf input data gagal!'
                        });
                    }
                    // $('#modal_tambah_user').modal('hide');
                    clearInputMahasiswa();
                    Mahasiswa();
                },
                error: function () {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops!',
                        text: 'Sorry, request is faied, please check your connection!'
                    })
                }
            });
        }
    }

});

// #endregion 
// ===============================

$('#master_produk').on('click', function () {
    nonactiveSidebar();
    $('#master_produk').addClass('mm-active');
    $('#title_page').text('Master Data Produk');
    $('#content').html('');

    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/products/show/",
        type: "GET",
        dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.Products;
                var table = '';

                for (let i = 0; i < data.length; i++) {

                    // var number_string = data[i].Produk_Harga.toString(),
                    // sisa = number_string.string % 3,
                    // rupiah = number_string.substr(0, sisa),
                    // ribuan = number_string.substr(sisa).match(/\d{3}/g);

                    // if(ribuan){
                    //     separator = sisa ? '.' : '';
                    // rupiah += separator + ribuan.join('.');
                    // }

                    table += `
                        <tr>
                            <td class="text-center text-muted"> #` + (i + 1) + `</td>
                            <td>` + data[i].Produk_Foto + `</td> 
                            <td>` + data[i].Produk_Nama + ` <br /> <b>` + data[i].Produk_Code + ` </b></td> 
                            <td>` + data[i].Produk_Merk + `</td> 
                            <td>` + data[i].Produk_Kategori + `</td> 
                            <td>` + data[i].Produk_Harga + `</td> 
                            <td>` + data[i].Produk_Stok + `</td>
                            <td>` + data[i].Produk_Created_By + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Produk_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Produk_Deleted_Status == 0) ? 'Aktif' : 'Terhapus') + `</div>
                            </td> 
                            <td class="text-center">
                                <button type="button" id="edit_role" data-idRole="` + data[i].Produk_Id + `" class="btn btn-warning btn-sm"><i class="fa fa-pencil"></i> Edit</button>
                                <button type="button" id="hapus_role" data-idRole="` + data[i].Produk_Id + `" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }


                $('#content').html(`
                    <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Produk
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_produk"><i class="fa fa-plus"></i> Tambah Produk</button>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table  table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center">#</th>
                                            <th scope="col">Foto</th>
                                            <th scope="col">Nama Produk</th>
                                            <th scope="col">Merk</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Stok</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col" class="text-center">Status</th>
                                            <th scope="col" class="text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ` + table + `
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-block text-center card-footer">
                                <div class="text-center"> <h5></h5> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Tambah Role -->
                <div class="modal fade" id="modal_tambah_produk" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Tambah Produk</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="needs-validation" novalidate>
                                <div class="modal-body">
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                            <label for="Nama_Role">Kode Produk</label>
                                            <input type="text" class="form-control" id="Produk_Code" name="Produk_Code" required>
                                            <div class="invalid-feedback">
                                                Isi Kode Produk terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Nama_Produk">Nama Produk</label>
                                            <input type="text" class="form-control" id="Produk_Nama" name="Produk_Nama" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Merk">Merk</label>
                                            <input type="text" class="form-control" id="Produk_Merk" name="Produk_Merk" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Kategori">Kategori</label>
                                            <select class="form-control" id="Produk_Kategori" name="Produk_Kategori">
                                                <option>- Pilih -</option>
                                                <option value='Minuman'>Minuman</option>
                                                <option value='Makanan'>Makanan</option>
                                                <option value='Cemilan'>Cemilan</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Harga">Harga</label>
                                            <input type="text" class="form-control" id="Produk_Harga" name="Produk_Harga" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Stok">Stok</label>
                                            <input type="text" class="form-control" id="Produk_Stok" name="Produk_Stok" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Foto">Foto Produk</label>
                                            <input type="file" class="form-control" id="Produk_Foto" placeholder="First name" name="Produk_Foto" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label for="Produk_Deskripsi">Deskripsi</label>
                                            <textarea class="form-control" id="Produk_Deskripsi" name="Produk_Deskripsi"></textarea>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="hidden" name="Produk_Created_By" id="Produk_Created_By" />
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                    <button type="submit" id="btn_simpan_role" class="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- /Modal Tambah Role -->

                <script>
                    // Example starter JavaScript for disabling form submissions if there are invalid fields
                    (function() {
                        'use strict';
                        window.addEventListener('load', function() {
                            // Fetch all the forms we want to apply custom Bootstrap validation styles to
                            var forms = document.getElementsByClassName('needs-validation');
                            // Loop over them and prevent submission
                            var validation = Array.prototype.filter.call(forms, function(form) {
                                form.addEventListener('submit', function(event) {
                                    if (form.checkValidity() === false) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                    form.classList.add('was-validated');
                                }, false);
                            });
                        }, false);
                    })();
                </script>
                `);


            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: r.Message
                })
            }
        }

    });

});

$('#tr_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#tr_penjualan').addClass('mm-active');
    $('#title_page').text('Data Transaksi Penjualan');
    $('#content').html('');

});

$('#tr_eMoney').on('click', function () {
    nonactiveSidebar();
    $('#tr_eMoney').addClass('mm-active');
    $('#title_page').text('Data Transaksi E-Money');
    $('#content').html('');

});

$('#report_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#report_penjualan').addClass('mm-active');
    $('#title_page').text('Laporan Penjualan');
    $('#content').html('');

});

$('#report_harian_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#report_penjualan').addClass('mm-active');
    $('#report_harian_penjualan').addClass('mm-active');
    $('#title_page').text('Laporan Penjualan Harian');
    $('#content').html('');

});

$('#report_mingguan_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#report_penjualan').addClass('mm-active');
    $('#report_mingguan_penjualan').addClass('mm-active');
    $('#title_page').text('Laporan Penjualan Mingguan');
    $('#content').html('');

});

$('#report_bulanan_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#report_penjualan').addClass('mm-active');
    $('#report_bulanan_penjualan').addClass('mm-active');
    $('#title_page').text('Laporan Penjualan Bulanan');
    $('#content').html('');

});

$('#report_tahunan_penjualan').on('click', function () {
    nonactiveSidebar();
    $('#report_penjualan').addClass('mm-active');
    $('#report_tahunan_penjualan').addClass('mm-active');
    $('#title_page').text('Laporan Penjualan Tahunan');
    $('#content').html('');

});

$('#report_eMoney').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#title_page').text('Laporan E-Money');
    $('#content').html('');

});

$('#report_harian_topup').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#report_harian_topup').addClass('mm-active');
    $('#title_page').text('Laporan Topup Harian');
    $('#content').html('');

});

$('#report_mingguan_topup').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#report_mingguan_topup').addClass('mm-active');
    $('#title_page').text('Laporan Topup Mingguan');
    $('#content').html('');

});

$('#report_bulanan_topup').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#report_bulanan_topup').addClass('mm-active');
    $('#title_page').text('Laporan Topup Bulanan');
    $('#content').html('');

});

$('#report_tahunan_topup').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#report_tahunan_topup').addClass('mm-active');
    $('#title_page').text('Laporan Topup Tahunan');
    $('#content').html('');

});

$('#cetak_kartu').on('click', function () {
    nonactiveSidebar();
    $('#cetak_kartu').addClass('mm-active');
    $('#title_page').text('Cetak Kartu KTM');
    $('#content').html('');

});


function nonactiveSidebar() {
    $('#main_dashboard').removeClass('mm-active');
    $('#master_role').removeClass('mm-active');
    $('#master_users').removeClass('mm-active');
    $('#master_mahasiswa').removeClass('mm-active');
    $('#master_produk').removeClass('mm-active');
    $('#tr_penjualan').removeClass('mm-active');
    $('#tr_eMoney').removeClass('mm-active');
    // Laporan Penjualan
    $('#report_penjualan').removeClass('mm-active');
    $('#report_harian_penjualan').removeClass('mm-active');
    $('#report_mingguan_penjualan').removeClass('mm-active');
    $('#report_bulanan_penjualan').removeClass('mm-active');
    $('#report_tahunan_penjualan').removeClass('mm-active');
    // Laporan
    $('#report_eMoney').removeClass('mm-active');
    $('#report_harian_topup').removeClass('mm-active');
    $('#report_mingguan_topup').removeClass('mm-active');
    $('#report_bulanan_topup').removeClass('mm-active');
    $('#report_tahunan_topup').removeClass('mm-active');
    $('#cetak_kartu').removeClass('mm-active');

}
// ================= /SUPER ADMIN =====================
// console.log('OK');