<!-- ========== SIDE BAR OPTION ========== -->
<?= $data['layout_option']; ?>
<!-- /========== SIDE BAR OPTION ========== -->

<div class="app-main">

    <!-- ======= SIDE BAR ======== -->
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu">
                    <li class="app-sidebar__heading">Dashboards</li>
                    <li>
                        <a id="main_dashboard" href="<?= BASE_URL ?>" class="mm-active">
                            <i class="metismenu-icon  fa fa-rocket"></i>
                            Main Dashboard
                        </a>
                    </li>
                    <li class="app-sidebar__heading">Data Master</li>
                    <li>
                        <a id="master_mahasiswa" href="javascript:void(0);">
                            <i class=" metismenu-icon fa fa-users"></i>
                            Master Data Mahasiswa
                        </a>
                    </li>
                    <!-- <li>
                        <a id="master_role" href="javascript:void(0);">
                            <i class=" metismenu-icon fa fa-chart-pie"></i>
                            Master Jurusan
                        </a>
                    </li> -->

                    <li class="app-sidebar__heading">Cetak</li>
                    <li>
                        <a id="cetak_kartu" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-id-card">
                            </i>Cetak Kartu Mahasiswa
                        </a>
                    </li>

                    <li class="app-sidebar__heading">Laporan</li>
                    <li>
                        <a id="report_data_mahasiswa" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-chart-bar"></i>
                            Laporan Data Mahasiswa
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a id="report_mahasiswa_jurusan" href="javascript:void(0);>
                                    <i class=" metismenu-icon"></i>
                                    Jurusan
                                </a>
                            </li>
                            <li>
                                <a id="report_mahasiswa_all" href="javascript:void(0);>
                                    <i class=" metismenu-icon">
                                    </i>Keseluruhan
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- ======= SIDE BAR ======== -->

    <div class="app-main__outer">
        <div class="app-main__inner">

            <!-- ======= TITLE PAGE ======== -->
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="fa fa-wallet icon-gradient bg-mean-fruit">
                            </i>
                        </div>
                        <div><span id="title_page">Dashboard</span> | E-Money Apps
                            <div class="page-title-subheading">Sistem Informasi E-Money Politeknik Praktisi Bandung. <?= ($_SESSION['data_user']->User_Nama) ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ======= /TITLE PAGE ======== -->

            <!-- ======= MAIN CONTENT ======== -->
            <div class="inner-content" id="content">

                <!-- ======= DATA ANALYTIC ======== -->
                <div class="row">
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-midnight-bloom">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Akuntansi</div>
                                    <div class="widget-subheading">Data 1 tahun terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>45</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-arielle-smile">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Manajemen Informatika</div>
                                    <div class="widget-subheading">Data 1 tahun terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>35</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-grow-early">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Perpajakan</div>
                                    <div class="widget-subheading">Data 1 tahun terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>58</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ======= /DATA ANALYTIC ======== -->

            </div>
            <!-- ======= /MAIN CONTENT ======== -->

            <!-- Modal Tambah Mahasiswa -->
            <div class="modal fade mt-5 mb-5" id="modal_tambah_mahasiswa" tabindex="-1" role="dialog" aria-labelledby="modal_mahasiswa_label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal_mahasiswa_label">Tambah Mahasiswa</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="POST" class="needs-validation" novalidate enctype="multipart/form-data">
                            <div class="modal-body">
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="Mahasiswa_Npm">NPM <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="Mahasiswa_Npm" placeholder="" name="Mahasiswa_Npm" required disabled>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="Mahasiswa_Nama">Nama <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="Mahasiswa_Nama" placeholder="" name="Mahasiswa_Nama" required>
                                        <div class="invalid-feedback">
                                            Isi nama terlebih dahulu!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="Mahasiswa_Jurusan">Jurusan <span class="text-danger">*</span></label>
                                        <select class="form-control" id="Mahasiswa_Jurusan" name="Mahasiswa_Jurusan" required>
                                            <option value="">-- PIlih Jurusan ---</option>
                                            <option value="Akuntansi">Akuntansi</option>
                                            <option value="Manajemen Informatika">Manajemen Informatika</option>
                                            <option value="">Perpajakan</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Pilih jurusan terlebih dahulu!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="Mahasiswa_Tahun_Angkatan">Angkatan <span class="text-danger">*</span></label>
                                        <select class="form-control" id="Mahasiswa_Tahun_Angkatan" name="Mahasiswa_Tahun_Angkatan" required>
                                            <option value="">-- PIlih Tahun Angkatan ---</option>
                                            <?php
                                            $yearStart = (date("Y") - 3);
                                            $yearCount = (date("Y") + 4) - $yearStart;
                                            for ($i = 0; $i < $yearCount; $i++) {
                                                ?>
                                                <option value="<?= ($yearStart + $i) ?>"><?= ($yearStart + $i) ?></option>
                                            <?php
                                            }
                                            ?>
                                        </select>
                                        <div class="invalid-feedback">
                                            Pilih tahun angkatan terlebih dahulu!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="Mahasiswa_Foto" id="Mahasiswa_Foto" accept="image/x-png,image/jpeg,image/jpg">
                                            <label class="custom-file-label" id="label_mahasiswa_foto" for="file">Pilih file...</label>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 mb-3">
                                            <img id="avatar_mahasiswa" width="100" height="120" class="rounded-circle" src="" alt="mahasiswa_foto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="Mahasiswa_Deleted_By" id="Mahasiswa_Deleted_By" value="<?= $_SESSION['data_user']->User_Nama; ?>">
                            <div class="modal-footer">
                                <div class="col">
                                    <button type="button" class="btn btn-warning btn_hapus_konten">Hapus konten</button>
                                </div>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                <button type="submit" class="btn btn-primary btn_tambah_mahasiswa">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /Modal Tambah User -->

        </div>