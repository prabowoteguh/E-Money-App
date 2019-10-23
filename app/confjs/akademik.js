// ================= ADMIN AKADEMIK =====================
// console.log('Akademik');
$(function laporanTotalMahasiswa() {
    // Akuntansi
    $.ajax({
        url: "http://localhost:8080/API-E-Money-App/public/mahasiswas/getDataTotalMahasiswa",
        type: "POST",
        dataType: "JSON",
        data: {
            Mahasiswa_Jurusan: 'Akuntansi'
        },
        success: function (r) {
            var data = r.Mahasiswa;
            var count = 0;
            for (let i = 0; i < data.length; i++) {
                count = (parseInt(count) + parseInt(data[i].Data_Mahasiswa));
            }
            $('#Mahasiswa_Akuntansi').text(count);
        }
    });

    // Manajemen Informatika
    $.ajax({
        url: "http://localhost:8080/API-E-Money-App/public/mahasiswas/getDataTotalMahasiswa",
        type: "POST",
        dataType: "JSON",
        data: {
            Mahasiswa_Jurusan: 'Manajemen Informatika'
        },
        success: function (r) {
            var data = r.Mahasiswa;
            var count = 0;
            for (let i = 0; i < data.length; i++) {
                count = (parseInt(count) + parseInt(data[i].Data_Mahasiswa));
            }
            $('#Mahasiswa_MI').text(count);
        }
    });

    // Perpajakan
    $.ajax({
        url: "http://localhost:8080/API-E-Money-App/public/mahasiswas/getDataTotalMahasiswa",
        type: "POST",
        dataType: "JSON",
        data: {
            Mahasiswa_Jurusan: 'Perpajakan'
        },
        success: function (r) {
            var data = r.Mahasiswa;
            var count = 0;
            for (let i = 0; i < data.length; i++) {
                count = (parseInt(count) + parseInt(data[i].Data_Mahasiswa));
            }
            $('#Mahasiswa_Pajak').text(count);
        }
    });
});

$('#main_dashboard').on('click', function () {
    nonactiveSidebar();
    $('#main_dashboard').addClass('mm-active');
});

function nonactiveSidebar() {
    $('#main_dashboard').removeClass('mm-active');
    $('#master_mahasiswa').removeClass('mm-active');
    $('#cetak_kartu').removeClass('mm-active');
    $('#report_data_mahasiswa').removeClass('mm-active');
    $('#report_mahasiswa_jurusan').removeClass('mm-active');
    $('#report_mahasiswa_all').removeClass('mm-active');
}

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
        url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/",
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
// ==============================================

$('#cetak_kartu').on('click', function () {
    nonactiveSidebar();
    $('#cetak_kartu').addClass('mm-active');
    $('#title_page').text('Cetak Kartu Tanda Mahasiswa');
    $('#content').html('');
});

$('#report_data_mahasiswa').on('click', function () {
    nonactiveSidebar();
    $('#report_data_mahasiswa').addClass('mm-active');
    $('#title_page').text('Laporan Data Mahasiswa');
    $('#content').html('');
});

$('#report_mahasiswa_jurusan').on('click', function () {
    nonactiveSidebar();
    $('#report_mahasiswa_jurusan').addClass('mm-active');
    $('#report_data_mahasiswa').addClass('mm-active');

    $('#title_page').text('Laporan Data Mahasiswa Jurusan');
    $('#content').html('');
});

$('#report_mahasiswa_all').on('click', function () {
    nonactiveSidebar();
    $('#report_mahasiswa_all').addClass('mm-active');
    $('#report_data_mahasiswa').addClass('mm-active');

    $('#title_page').text('Laporan Data Mahasiswa');
    $('#content').html('');
});

// ================= /ADMIN AKADEMIK =====================