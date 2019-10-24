// ================= ADMIN KEUANGAN =====================
// console.log('Keuangan');

$(function Dashboard() {
    $.ajax({
        url: "http://localhost:8080/API-E-Money-App/public/moneys/laporanPerHari",
        type: "GET",
        dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            var data = r.Money;
            $('#data_hari_topup').text('Rp. ' + ((data.Total_Nominal == null) ? 0 : data.Total_Nominal));
            $('#data_hari_mahasiswa').text(data.Total_Mahasiswa);
        }
    });

    $.ajax({
        url: "http://localhost:8080/API-E-Money-App/public/moneys/laporanPerMinggu",
        type: "GET",
        dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            var data = r.Money;
            $('#data_minggu_topup').text('Rp. ' + data.Total_Nominal);
            $('#data_minggu_mahasiswa').text(data.Total_Mahasiswa);
        }
    });
});

$('#main_dashboard').on('click', function () {
    nonactiveSidebar();
    $('#main_dashboard').addClass('mm-active');
});

function nonactiveSidebar() {
    $('#main_dashboard').removeClass('mm-active');
    $('#master_transaksi_emoney').removeClass('mm-active');
    $('#master_topup_emoney').removeClass('mm-active');
    $('#topup_emoney').removeClass('mm-active');
    // Laporan
    $('#report_eMoney').removeClass('mm-active');
    $('#report_harian_topup').removeClass('mm-active');
    $('#report_mingguan_topup').removeClass('mm-active');
    $('#report_bulanan_topup').removeClass('mm-active');
    $('#report_tahunan_topup').removeClass('mm-active');
}

$('#master_transaksi_emoney').on('click', function () {
    nonactiveSidebar();
    $('#master_transaksi_emoney').addClass('mm-active');
    $('#title_page').text('Master Data Transaksi E-Money');
    $('#content').html('');
});

$('#master_topup_emoney').on('click', function () {
    nonactiveSidebar();
    $('#master_topup_emoney').addClass('mm-active');
    $('#title_page').text('Master Data TopUp E-Money');
    $('#content').html('');

    $.ajax({
        url: "http://" + URL_API + "/API-E-Money-App/public/moneys/show/",
        type: "GET",
        // dataType: "JSON",
        data: {
            // 
        },
        success: function (r) {
            if (r.Status_Code == 200) {
                var data = r.Moneys;
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
                            <td>` + data[i].Money_Nominal + `</td> 
                            <td>` + data[i].Money_Created_By + `</td> 
                            <td>` + data[i].Money_Created_Date + `</td> 
                            <td class="text-center">
                                <div class="badge badge-` + ((data[i].Money_Deleted_Status == 0) ? 'success' : 'danger') + `">` + ((data[i].Money_Deleted_Status == 0) ? 'Sukses' : 'Terhapus') + `</div>
                            </td> 
                            <!-- <td class="text-center">
                                <button type="button" data-Money="` + data[i].Money_Nama + `" data-id="` + data[i].Money_Id + `" class="btn btn-danger btn-sm hapus_Money" ` + ((data[i].Money_Deleted_Status == 0) ? '' : 'disabled') + `><i class="fa fa-trash"></i> Hapus</button>
                            </td> -->
                        </tr>

                    `;
                }

                $('#content').html(`
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Data Transaksi Top Up E-Money
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <!-- <button class="btn btn-success" id="btn_tambah_mahasiswa" data-backdrop="false" data-toggle="modal" data-target="#modal_tambah_mahasiswa"><i class="fa fa-plus"></i> Tambah Data Mahasiswa</button> -->
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div class="table-responsive">
                                        <table id="table_topup" class="display nowrap align-middle mb-0 table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col">Nama Mahasiswa</th>
                                                    <th scope="col">Jurusan</th>
                                                    <th scope="col">Nominal TopUp</th>
                                                    <th scope="col">Admin</th>
                                                    <th scope="col">Tanggal Top Up</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <!-- <th scope="col" class="text-center">Aksi</th> -->
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
                                                    <th scope="col">Nominal TopUp</th>
                                                    <th scope="col">Admin</th>
                                                    <th scope="col">Tanggal Top Up</th>
                                                    <th scope="col"  class="text-center">Status</th> 
                                                    <!-- <th scope="col" class="text-center">Aksi</th> -->
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
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: r.Message
            });
        }
    });
});


$('#topup_emoney').on('click', function () {
    nonactiveSidebar();
    $('#topup_emoney').addClass('mm-active');

    $('#title_page').text('Top Up E-Money');
    $('#content').html('');

    $('#content').html(`
    <div class="row">
        <div class="col-md-12">
            <div class="main-card mb-3 card">

                <div class="card-body">
                    <div class="alert alert-success fade show mb-3">
                        <h5 class="alert-heading">Selamat Datang!</h5>
                        <p>Silakan lakukan pencarian berdasarkan NPM Mahasiswa untuk melakukan Top Up E-Money.</p>
                    </div>
                    <div class="search-wrapper p-3">
                        <div class="input-holder">
                            <input type="text" class="search-input" id="search_npm" name="search_npm" placeholder="Type to search">
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close ml-3"></button>
                        
                        <!-- ======= DROPDOWN SEARCH ======== -->
                        <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                        <div tabindex="-1" aria-labelledby="dropdownMenuButton" class="dropdown-menu myDropdown"></div>   
                        <!-- ======= /DROPDOWN SEARCH ======== -->                 
                    </div>
                </div>

                <div class="d-block text-center card-footer">
                    <div id="content-pencarian-mahasiswa"></div>
                </div>
            </div>
        </div>
    </div>
    `);

    // #region ANIMASI SEARCH 
    $(".search-icon").click(function () {
        $(this).parent().parent().addClass("active");
    });

    $(".search-wrapper .close").click(function () {
        $(this).parent().removeClass("active");
    });
    // #endregion END OF ANIMASI SEARCH 

    // PENCARIAN MAHASISWA BY NPM UNTUK MELAKUKAN TOPUP
    $('#search_npm').on('keyup', function () {
        // console.log($('#search_npm').val());
        if ($('#search_npm').val() != '') {
            $.ajax({
                url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/getDataLikeNpm/",
                type: "POST",
                dataType: "JSON",
                data: {
                    Mahasiswa_Npm: $('#search_npm').val()
                },
                success: function (r) {
                    var m = r.Mahasiswa;
                    var item = '';
                    if (m.length > 0) {
                        $('.myDropdown').html('');
                        $('.dropdownMenuButton').dropdown('toggle');
                        for (let i = 0; i < m.length; i++) {
                            item += `
                            <button type="button" tabindex="0" class="dropdown-item search-item" data-npm="` + m[i].Mahasiswa_Npm + `" data-id="` + m[i].Mahasiswa_Id + `">
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                                <img width="40" class="rounded-circle" src="` + BASE_URL + `assets/images/avatars/` + ((m[i].Mahasiswa_Foto == '') ? 'student.png' : m[i].Mahasiswa_Foto) + `" alt="avatar">
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading">` + m[i].Mahasiswa_Nama + `</div>
                                            <div class="widget-subheading opacity-7">` + m[i].Mahasiswa_Npm + `</div>
                                        </div>
                                    </div>
                                </div>
                            </button>`;
                        }
                        $('.myDropdown').html(item);
                        $('.myDropdown').show();
                        $('.dropdownMenuButton').click();

                    } else {
                        $('.myDropdown').html('');
                        $('[data-toggle="dropdown"]').parent().removeClass('open');
                        $('.myDropdown').hide();
                    }

                    $('.search-item').on('click', function () {
                        $('.myDropdown').hide();
                        $('#search_npm').val('');
                        $('.close').click();

                        var Mahasiswa_Npm = $(this).data('npm');
                        $('#content-pencarian-mahasiswa').html('');
                        $.ajax({
                            url: "http://" + URL_API + "/API-E-Money-App/public/mahasiswas/getDataByNpm/",
                            type: "POST",
                            dataType: "JSON",
                            data: {
                                Mahasiswa_Npm: Mahasiswa_Npm
                            },
                            success: function (r) {
                                if (r.Status_Code == 200) {
                                    var mhs = r.Mahasiswa;
                                    $('#content-pencarian-mahasiswa').html(`
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="card m-5">
                                                    <h5 class="card-header">` + mhs.Mahasiswa_Nama + `</h5>
                                                    <div class="card-body">
                                                        <div class="row justify-content-center">
                                                            <div class="col-md-6 pt-3 mb-3">
                                                                <img width="50" class="rounded-circle" src="` + BASE_URL + `assets/images/avatars/` + ((mhs.Mahasiswa_Foto == '') ? 'student.png' : mhs.Mahasiswa_Foto) + `" alt="avatar">
                                                                <div class="widget-heading">` + mhs.Mahasiswa_Nama + `</div>
                                                                <div class="widget-subheading opacity-7">` + mhs.Mahasiswa_Npm + `</div>
                                                               
                                                                <div class="row">
                                                                    <div class="col-sm-12">
                                                                        <p class="text-dark">` + mhs.Mahasiswa_Jurusan + ` - ` + mhs.Mahasiswa_Tahun_Angkatan + `</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-12">
                                                                        <p class="text-dark">Saldo Terakhir : Rp. ` + mhs.Mahasiswa_Saldo + `</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 pt-3 mb3">
                                                                <form method="POST" class="needs-validation" novalidate>
                                                                    <div class="form-row">
                                                                        <div class="col-md-12 mb-3">
                                                                            <label for="input_emoney">Jumlah Topup</label>
                                                                            <input type="number" class="form-control" id="input_emoney" placeholder="Rp.xx.xxx..." required>
                                                                            <small id="passwordHelpBlock" class="form-text text-muted">
                                                                                Silahkan isikan dengan menggunakan angka, minimal topup adalah Rp. 10.000
                                                                            </small>
                                                                            <div class="invalid-tooltip pesan_error">
                                                                                <!-- ======= MAIN CONTENT ======== -->
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-3 mb-3">
                                                                            <button type="button" class="btn_topup_cancel btn btn-secondary btn-block">Cancel</button>
                                                                        </div>
                                                                        <div class="col-md-3 mb-3">
                                                                            <button type="submit" class="btn_topup btn btn-outline-success btn-transition btn-block">Top Up</button>
                                                                        </div>  
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    `);

                                    // #region TOPUP E-MONEY FUNGTION
                                    $('.btn_topup').on('click', function (event) {
                                        if ($('#input_emoney').val() == '') {
                                            $('#input_emoney').removeClass('is-invalid');
                                            event.preventDefault();
                                            event.stopPropagation();
                                            $('.pesan_error').text('Maaf, Silakan isikan nilai topup terlebih dahulu!');
                                            $('#input_emoney').addClass('is-invalid');
                                        } else if ($('#input_emoney').val() < 10000) {
                                            $('#input_emoney').removeClass('is-invalid');
                                            event.preventDefault();
                                            event.stopPropagation();
                                            $('.pesan_error').text('Maaf, nilai yang anda masukkan kurang dari 10.000');
                                            $('#input_emoney').addClass('is-invalid');
                                        } else {
                                            $('#input_emoney').removeClass('is-invalid');
                                            event.preventDefault();
                                            $('#input_emoney').addClass('is-valid');

                                            $.ajax({
                                                url: "http://" + URL_API + "/API-E-Money-App/public/moneys/insert/",
                                                type: "POST",
                                                dataType: "JSON",
                                                data: {
                                                    Mahasiswa_Id: mhs.Mahasiswa_Id,
                                                    Mahasiswa_Saldo: (parseInt(mhs.Mahasiswa_Saldo) + parseInt($('#input_emoney').val())),
                                                    Money_Mahasiswa_Npm: mhs.Mahasiswa_Npm,
                                                    Money_Nominal: $('#input_emoney').val(),
                                                    Money_Created_By: $('#User_Nama').val()
                                                },
                                                success: function (r) {
                                                    if (r.Status_Code == 200) {
                                                        Swal.fire({
                                                            type: 'success',
                                                            title: 'Berhasil',
                                                            text: r.Message
                                                        });
                                                        $('#content-pencarian-mahasiswa').html('');
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
                                                        text: 'Sorry, your request has blocked, please check your connection!'
                                                    });
                                                }
                                            })
                                        }
                                    });
                                    // #endregion =============================================

                                    $('.btn_topup_cancel').on('click', function () {
                                        $('#content-pencarian-mahasiswa').html('');
                                    });

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
                                    text: 'Sorry, your request has blocked, please check your connection!'
                                });
                            }
                        });

                    });
                },
                error: function () {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Sorry, your request has blocked, please check your connection!'
                    });
                }
            });


        } else {
            $('.myDropdown').html('');
            $('.myDropdown').hide();
        }
    });
    // ================================================
});


$('#report_eMoney').on('click', function () {
    nonactiveSidebar();
    $('#report_eMoney').addClass('mm-active');
    $('#title_page').text('Laporan E-Money');
    $('#content').html('');

    $('#content').html(`
        
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="mb-3 card">
                    <div class="card-header-tab card-header-tab-animation card-header">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                            Laporan Top Up
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tabs-eg-77">
                                <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                    <div class="widget-chat-wrapper-outer">
                                        <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                            <canvas id="canvas"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="mb-3 card">
                    <div class="card-header-tab card-header-tab-animation card-header">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                            LAPORAN TOTAL NOMINAL TOP UP
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tabs-eg-77">
                                <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                    <div class="widget-chat-wrapper-outer">
                                        <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                            <canvas id="pie_chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    var t = document.getElementById("chart-area").getContext("2d");
    window.myPie = new r.a(t, s);

    // set the data
    var data = [{
            x: "White",
            value: 223553265
        },
        {
            x: "Black or African American",
            value: 38929319
        },
        {
            x: "American Indian and Alaska Native",
            value: 2932248
        },
        {
            x: "Asian",
            value: 14674252
        },
        {
            x: "Native Hawaiian and Other Pacific Islander",
            value: 540013
        },
        {
            x: "Some Other Race",
            value: 19107368
        },
        {
            x: "Two or More Races",
            value: 9009073
        }
    ];

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    // chart.title("Population by Race for the United States: 2010 Census");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('pie_chart');
    chart.draw();
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

// ================= /ADMIN KEUANGAN =====================