// ================= SUPER ADMIN =====================
const URL_API = 'localhost:8080';
const BASE_URL = 'http://localhost:8080/E-Money-App/public/';

$('#main_dashboard').on('click', function () {
    nonactiveSidebar();
    $('#main_dashboard').addClass('mm-active');
});

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
                                    ref();
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
                                    ref();
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
                                ref();
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

$('#master_users').on('click', function () {
    nonactiveSidebar();
    $('#master_users').addClass('mm-active');
    $('#title_page').text('Master Data Users');
    $('#content').html('');
    console.log('OK');
    refreshUsers();
});

function User() {
    refreshUsers();
}

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
                console.log('OK');
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
                                <button type="button" data-user="` + data[i].User_Nama + `" data-status="` + data[i].User_Status_Aktif + `" data-id="` + data[i].User_Id + `" class="btn btn-` + ((data[i].User_Status_Aktif == 1) ? 'danger' : 'success') + ` btn-sm aktif_user" ` + ((data[i].User_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-power-off"></i> ` + ((data[i].User_Deleted_Status == 0) ? ((data[i].User_Status_Aktif == 1) ? 'Disable' : 'Enable') : 'Disable') + `</button>
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
                                        <button class="btn btn-success" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_user"><i class="fa fa-plus"></i> Tambah User</button>
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
                                    ref();
                                }
                            });
                        } else {
                            //
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
        }

    });
}

$('#master_mahasiswa').on('click', function () {
    nonactiveSidebar();
    $('#master_mahasiswa').addClass('mm-active');
    $('#title_page').text('Master Data Mahasiswa');
    $('#content').html('');

    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/show/",
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
                            <td>` + data[i].Mahasiswa_Npm + `</td> 
                            <td>` + data[i].Mahasiswa_Nama + `</td> 
                            <td>` + data[i].Mahasiswa_Jurusan + `</td> 
                            <td>` + data[i].Mahasiswa_Tahun_Angkatan + `</td> 
                            <td>` + data[i].Mahasiswa_Foto + `</td>
                            <td>` + data[i].Mahasiswa_Created_By + `</td>  
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Mahasiswa_Deleted_Status == 0) ? 'Aktif' : 'Terhapus') + `</div>
                            </td> 
                            <td class="text-center">
                                <button type="button" id="edit_mahasiswa" data-idMahasiswa="` + data[i].Mahasiswa_Id + `" class="btn btn-warning btn-sm"><i class="fa fa-pencil"></i> Edit</button>
                                <button type="button" id="hapus_mahasiswa" data-idMahasiswa="` + data[i].Mahasiswa_Id + `" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }

                $('#content').html(`
                    <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Mahasiswa
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_mahasiswa"><i class="fa fa-plus"></i> Tambah</button>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table  table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center">#</th>
                                            <th scope="col">NPM</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Jurusan</th>
                                            <th scope="col">Angkatan</th>
                                            <th scope="col">URL Foto</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col"  class="text-center">Status</th>
                                            <th scope="col" class="text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ` + table + `
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="col" class="text-center">#</th>
                                            <th scope="col">NPM</th>
                                            <th scope="col">Nama</th>
                                            <th scope="col">Jurusan</th>
                                            <th scope="col">Angkatan</th>
                                            <th scope="col">URL Foto</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col"  class="text-center">Status</th>
                                            <th scope="col" class="text-center">Aksi</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="d-block text-center card-footer">
                                <div class="text-center"> <h5></h5> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Tambah Role -->
                <div class="modal fade" id="modal_tambah_mahasiswa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Tambah Mahasiswa</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Npm">NPM</label>
                                        <input type="number" name="Mahasiswa_Npm" class="form-control" id="Mahasiswa_Npm" required>
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Nama">Nama</label>
                                        <input type="text" name="Mahasiswa_Nama" class="form-control" id="Mahasiswa_Nama" required>
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Jurusan">Jurusan</label>
                                            <select name="jurusan" class="form-control">
                                                <option value="-">-- Pilih --</option>
                                                <option value="Akuntansi">Akuntansi</option>
                                                <option value="Perpajakan">Perpajakan</option>
                                                <option value="Manajemen Informatika">Manajemen Informatika</option>
                                            </select>
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Tahun_Angkatan">Angkatan</label>
                                        <input type="text" name="Mahasiswa_Tahun_Angkatan" class="form-control" id="Mahasiswa_Tahun_Angkatan" required>
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Foto">URL Foto</label>
                                        <input type="file" name="Mahasiswa_Foto" class="form-control" id="Mahasiswa_Foto" required>
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="Mahasiswa_Created_By">Created By</label>
                                        <input type="text" name="Mahasiswa_Created_By" class="form-control" id="Mahasiswa_Created_By" required>
                                    </div> 
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                    <button type="submit" id="btn_simpan_mahasiswa" class="btn btn-primary">Simpan</button>
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

    $('#btn_simpan_mahasiswa').on('click', function () {
        console.log('OK');
    });
});

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

$('#report_eMoney').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#title_page').text('Laporan E-Money');
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
    $('#report_penjualan').removeClass('mm-active');
    $('#report_eMoney').removeClass('mm-active');
    $('#cetak_kartu').removeClass('mm-active');
}
// ================= /SUPER ADMIN =====================
// console.log('OK');