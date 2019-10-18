// ================= SUPER ADMIN =====================
$('#main_dashboard').on('click', function () {
    nonactiveSidebar();
    $('#main_dashboard').addClass('mm-active');
});

$('#master_role').on('click', function () {
    nonactiveSidebar();
    $('#master_role').addClass('mm-active');
    $('#title_page').text('Master Data Role');
    $('#content').html('');

    $.ajax({
        url: "http://192.168.100.80:8080/API-E-Money-App/public/roles/show/",
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
                                <button type="button" id="edit_role" data-idRole="` + data[i].Role_Id + `" class="btn btn-warning btn-sm"><i class="fa fa-pencil"></i> Edit</button>
                                <button type="button" id="hapus_role" data-idRole="` + data[i].Role_Id + `" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Hapus</button>
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

                <!-- Modal Tambah Role -->
                <div class="modal fade" id="modal_tambah_role" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Tambah Role</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="needs-validation" novalidate>
                                <div class="modal-body">
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                            <label for="Nama_Role">Nama Role</label>
                                            <input type="text" class="form-control" id="Nama_Role" placeholder="First name" name="Nama_Role" required>
                                            <div class="invalid-feedback">
                                                Isi role terlebih dahulu!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
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