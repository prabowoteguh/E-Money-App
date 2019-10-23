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
                        <a id="master_topup_emoney" href="javascript:void(0);">
                            <i class=" metismenu-icon fa fa-coins"></i>
                            Master Data TopUp E-Money
                        </a>
                    </li>

                    <li class="app-sidebar__heading">E-Money</li>
                    <li>
                        <a id="topup_emoney" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-wallet">
                            </i>Top Up E-Money
                        </a>
                    </li>

                    <li class="app-sidebar__heading">Laporan</li>
                    <li>
                        <a id="report_eMoney" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-chart-line"></i>
                            Laporan Topup E-Money
                            <!-- <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i> -->
                        </a>
                        <!-- <ul>
                            <li>
                                <a id="report_harian_topup" href="javascript:void(0);>
                                    <i class=" metismenu-icon"></i>
                                    Harian
                                </a>
                            </li>
                            <li>
                                <a id="report_mingguan_topup" href="javascript:void(0);>
                                    <i class=" metismenu-icon">
                                    </i>Mingguan
                                </a>
                            </li>
                            <li>
                                <a id="report_bulanan_topup" href="javascript:void(0);>
                                    <i class=" metismenu-icon">
                                    </i>Bulanan
                                </a>
                            </li>
                            <li>
                                <a id="report_tahunan_topup" href="javascript:void(0);>
                                    <i class=" metismenu-icon">
                                    </i>Tahunan
                                </a>
                            </li>
                        </ul> -->
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
                            <div class="page-title-subheading">Sistem Informasi E-Money Politeknik Praktisi Bandung.</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ======= /TITLE PAGE ======== -->



            <!-- ======= MAIN CONTENT ======== -->
            <div class="inner-content" id="content">

                <!-- ======= DATA ANALYTIC ======== -->
                <div class="row">
                    <div class="col-md-4 col-xl-3">
                        <div class="card mb-3 widget-content bg-midnight-bloom">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Total Nominal Top Up</div>
                                    <div class="widget-subheading">Data hari ini</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="text-white">
                                        <p id="data_hari_topup">45</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card mb-3 widget-content bg-arielle-smile">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Jumlah Mahasiswa Top Up</div>
                                    <div class="widget-subheading">Data hari ini</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="text-white">
                                        <p id="data_hari_mahasiswa">35</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card mb-3 widget-content bg-grow-early">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Total Nominal Top Up</div>
                                    <div class="widget-subheading">Data 1 minggu terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="text-white">
                                        <p id="data_minggu_topup">58</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card mb-3 widget-content bg-premium-dark">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Jumlah Mahasiswa Top Up</div>
                                    <div class="widget-subheading">Data 1 minggu terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="text-white">
                                        <p id="data_minggu_mahasiswa">58</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ======= /DATA ANALYTIC ======== -->

            </div>
            <!-- ======= /MAIN CONTENT ======== -->



        </div>