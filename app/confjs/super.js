// ================= SUPER ADMIN =====================
const URL_API = 'localhost:8080';

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

function ref() {
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
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Role_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Role_Deleted_Status == 0) ? 'Aktif' : 'Terhapus') + `</div>
                            </td> 
                            <td class="text-center">
                                <button type="button" data-ishapus="` + data[i].Role_Deleted_Status + `" data-role="` + data[i].Role_Nama + `" data-backdrop="false" data-id="` + data[i].Role_Id + `" class="btn btn-warning btn-sm edit_role" Data-toggle="modal"><i class="fa fa-pencil"></i> Edit</button>
                                <button type="button" data-user="Teguh" data-role="` + data[i].Role_Nama + `" data-id="` + data[i].Role_Id + `" class="btn btn-danger btn-sm hapus_role" ` + ((data[i].Role_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-trash"></i> Hapus</button>
                            </td> 
                        </tr>

                    `;
                }

                $('#content').html(`
                    <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Roles
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="btn btn-success" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_role"><i class="fa fa-plus"></i> Tambah</button>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table  table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center">#</th>
                                            <th scope="col">Nama Role</th>
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
                                            <th scope="col">Nama Role</th>
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
                `);

            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: r.Message
                });
            }
            $('.edit_role').on('click', function () {
                // data-toggle="modal" data-target="#modal_tambah_role"
                if ($(this).data('ishapus') == 1) {
                    Swal.fire({
                        title: 'Apakah anda yakin?',
                        text: "Data " + $(this).data('role') + " telah terhapus, apakah anda yakin ingin mengembalikannya?",
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
                    $('#modal_edit_role').modal('toggle');
                    $('#modal_edit_role').modal('show');
                    var Role_Nama = $(this).data('role');
                    $('#Role_Nama').val(Role_Nama);
                    if (Role_Nama != '') {

                    }
                }

            });

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
                                Role_Deleted_By: $(this).data('user')
                            },
                            success: function (r) {
                                console.log(r);
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

$('#btn_simpan_role').on('click', function (e) {
    e.preventDefault();
    var Created_By = ($('#Created_By').val());
    var Role_Nama = ($('#Role_Nama').val());
    if (Role_Nama != '') {
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
                    $('#modal_tambah_role').modal('toggle');
                    $('#modal_tambah_role').modal('hide');
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

});

$('#master_mahasiswa').on('click', function () {
    nonactiveSidebar();
    $('#master_mahasiswa').addClass('mm-active');
    $('#title_page').text('Master Data Mahasiswa');
    $('#content').html('');

});

$('#master_produk').on('click', function () {
    nonactiveSidebar();
    $('#master_produk').addClass('mm-active');
    $('#title_page').text('Master Data Produk');
    $('#content').html('');

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



console.log('OK');