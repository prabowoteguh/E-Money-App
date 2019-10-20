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
                        <a id="master_role" href="javascript:void(0);">
                            <i class=" metismenu-icon fa fa-chart-pie"></i>
                            Master Role
                        </a>
                    </li>
                    <li>
                        <a id="master_users" href="javascript:void(0);">
                            <i class=" metismenu-icon fa fa-users"></i>
                            Master Users
                        </a>
                    </li>
                    <li>
                        <a id="master_mahasiswa" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-user"></i>
                            Master Mahasiswa
                        </a>
                    </li>
                    <li>
                        <a id="master_produk" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-box"></i>
                            Master Products
                        </a>
                    </li>

                    <!-- <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                            Elements
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="elements-buttons-standard.html">
                                    <i class="metismenu-icon"></i>
                                    Buttons
                                </a>
                            </li>
                            <li>
                                <a href="elements-dropdowns.html">
                                    <i class="metismenu-icon">
                                    </i>Dropdowns
                                </a>
                            </li>
                            <li>
                                <a href="elements-icons.html">
                                    <i class="metismenu-icon">
                                    </i>Icons
                                </a>
                            </li>
                            <li>
                                <a href="elements-badges-labels.html">
                                    <i class="metismenu-icon">
                                    </i>Badges
                                </a>
                            </li>
                            <li>
                                <a href="elements-cards.html">
                                    <i class="metismenu-icon">
                                    </i>Cards
                                </a>
                            </li>
                            <li>
                                <a href="elements-list-group.html">
                                    <i class="metismenu-icon">
                                    </i>List Groups
                                </a>
                            </li>
                            <li>
                                <a href="elements-navigation.html">
                                    <i class="metismenu-icon">
                                    </i>Navigation Menus
                                </a>
                            </li>
                            <li>
                                <a href="elements-utilities.html">
                                    <i class="metismenu-icon">
                                    </i>Utilities
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-car"></i>
                            Components
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="components-tabs.html">
                                    <i class="metismenu-icon">
                                    </i>Tabs
                                </a>
                            </li>
                            <li>
                                <a href="components-accordions.html">
                                    <i class="metismenu-icon">
                                    </i>Accordions
                                </a>
                            </li>
                            <li>
                                <a href="components-notifications.html">
                                    <i class="metismenu-icon">
                                    </i>Notifications
                                </a>
                            </li>
                            <li>
                                <a href="components-modals.html">
                                    <i class="metismenu-icon">
                                    </i>Modals
                                </a>
                            </li>
                            <li>
                                <a href="components-progress-bar.html">
                                    <i class="metismenu-icon">
                                    </i>Progress Bar
                                </a>
                            </li>
                            <li>
                                <a href="components-tooltips-popovers.html">
                                    <i class="metismenu-icon">
                                    </i>Tooltips &amp; Popovers
                                </a>
                            </li>
                            <li>
                                <a href="components-carousel.html">
                                    <i class="metismenu-icon">
                                    </i>Carousel
                                </a>
                            </li>
                            <li>
                                <a href="components-calendar.html">
                                    <i class="metismenu-icon">
                                    </i>Calendar
                                </a>
                            </li>
                            <li>
                                <a href="components-pagination.html">
                                    <i class="metismenu-icon">
                                    </i>Pagination
                                </a>
                            </li>
                            <li>
                                <a href="components-scrollable-elements.html">
                                    <i class="metismenu-icon">
                                    </i>Scrollable
                                </a>
                            </li>
                            <li>
                                <a href="components-maps.html">
                                    <i class="metismenu-icon">
                                    </i>Maps
                                </a>
                            </li>
                        </ul>
                    </li> -->

                    <li class="app-sidebar__heading">Data Transaksi</li>
                    <li>
                        <a id="tr_penjualan" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-shopping-cart"></i>
                            Penjualan
                        </a>
                    </li>
                    <li>
                        <a id="tr_eMoney" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-wallet"></i>
                            Topup E-Money
                        </a>
                    </li>

                    <li class="app-sidebar__heading">Laporan</li>
                    <li>
                        <a id="report_penjualan" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-chart-bar">
                            </i>Laporan Penjualan
                        </a>
                    </li>
                    <li>
                        <a id="report_eMoney" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-chart-line">
                            </i>Laporan Topup E-Money
                        </a>
                    </li>
                    <li>
                        <a id="cetak_kartu" href="javascript:void(0);">
                            <i class="metismenu-icon fa fa-id-card">
                            </i>Cetak Kartu Mahasiswa
                        </a>
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
                            <div class="page-title-subheading">Sistem Informasi E-Money Politeknik Praktisi Bandung.
                            </div>
                        </div>
                    </div>
                    <!-- <div class="page-title-actions">
                        <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="d-inline-block dropdown">
                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                <span class="btn-icon-wrapper pr-2 opacity-7">
                                    <i class="fa fa-business-time fa-w-20"></i>
                                </span>
                                Buttons
                            </button>
                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link">
                                            <i class="nav-link-icon lnr-inbox"></i>
                                            <span>
                                                Inbox
                                            </span>
                                            <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link">
                                            <i class="nav-link-icon lnr-book"></i>
                                            <span>
                                                Book
                                            </span>
                                            <div class="ml-auto badge badge-pill badge-danger">5</div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link">
                                            <i class="nav-link-icon lnr-picture"></i>
                                            <span>
                                                Picture
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a disabled href="javascript:void(0);" class="nav-link disabled">
                                            <i class="nav-link-icon lnr-file-empty"></i>
                                            <span>
                                                File Disabled
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- ======= /TITLE PAGE ======== -->

            <div class="inner-content" id="content">
                <!-- ======= DATA ANALYTIC ======== -->
                <div class="row">
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-midnight-bloom">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Total Pembelian</div>
                                    <div class="widget-subheading">Data tahun terakhir</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>1896</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-arielle-smile">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Mahasiswa</div>
                                    <div class="widget-subheading">Total Mahasiswa</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>568</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-grow-early">
                            <div class="widget-content-wrapper text-white">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Karyawan</div>
                                    <div class="widget-subheading">Total Karyawan</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers text-white"><span>46</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-premium-dark">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Products Sold</div>
                                <div class="widget-subheading">Revenue streams</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-warning"><span>$14M</span></div>
                            </div>
                        </div>
                    </div>
                </div> -->
                </div>
                <!-- ======= /DATA ANALYTIC ======== -->

                <!-- ======= DATA ANALYTIC ======== -->
                <div class="row">
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Total TopUp E-Money</div>
                                        <div class="widget-subheading">Transaksi topup per tahun terakhir</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-success">1896</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Produk Terjual</div>
                                        <div class="widget-subheading">Data Penjualan Produk</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-warning">$3M</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Produk</div>
                                        <div class="widget-subheading">Total Produk</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-danger">459</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Income</div>
                                        <div class="widget-subheading">Expected totals</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-focus">$147</div>
                                    </div>
                                </div>
                                <div class="widget-progress-wrapper">
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style="width: 54%;"></div>
                                    </div>
                                    <div class="progress-sub-label">
                                        <div class="sub-label-left">Expenses</div>
                                        <div class="sub-label-right">100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /======= DATA ANALYTIC ======== -->

                <!-- ====== TABLE USERS ====== -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Active Users
                                <!-- <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="active btn btn-focus">Last Week</button>
                                        <button class="btn btn-focus">All Month</button>
                                    </div>
                                </div> -->
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th>Name</th>
                                            <th class="text-center">City</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center text-muted">#345</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">John Doe</div>
                                                            <div class="widget-subheading opacity-7">Web Developer</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">
                                                <div class="badge badge-warning">Pending</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#347</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Ruben Tillman</div>
                                                            <div class="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">
                                                <div class="badge badge-success">Completed</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#321</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Elliot Huber</div>
                                                            <div class="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">
                                                <div class="badge badge-danger">In Progress</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-3" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#55</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="assets/images/avatars/1.jpg" alt=""></div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Vinnie Wagstaff</div>
                                                            <div class="widget-subheading opacity-7">UI Designer</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">
                                                <div class="badge badge-info">On Hold</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-block text-center card-footer">
                                <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                <button class="btn-wide btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ====== /TABLE USERS ====== -->
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
                        <div class="modal-body">
                            <form method="POST" class="needs-validation" novalidate>
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="Role_Nama">Nama Role</label>
                                        <input type="text" class="form-control" id="Role_Nama" placeholder="" name="Role_Nama" required>
                                        <div class="invalid-feedback">
                                            Isi role terlebih dahulu!
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="Created_By" id="Created_By" value="<?= $_SESSION['data_user']->User_Nama; ?>">
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                    <button type="submit" class="btn btn-primary btn_simpan_role">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Modal Tambah Role -->

            <!-- Modal Edit Role -->
            <div class="modal fade" id="modal_edit_role" tabindex="-1" role="dialog" aria-labelledby="modal_edit" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal_edit">Edit Role</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="POST" class="needs-validation" novalidate>
                            <div class="modal-body">
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="Role_Nama_Edit">Nama Role</label>
                                        <input type="text" class="form-control" id="Role_Nama_Edit" placeholder="" name="Role_Nama" required>
                                        <div class="invalid-feedback">
                                            Isi role terlebih dahulu!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="Role_Updated_By" id="Role_Updated_By" value="<?= $_SESSION['data_user']->User_Nama; ?>">
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                <button type="submit" class="btn btn-primary btn_update_role">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /Modal Edit Role -->

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

            <!-- ======= GRAPHIC CHART ======== -->
            <!-- <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="mb-3 card">
                        <div class="card-header-tab card-header-tab-animation card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                Sales Report
                            </div>
                            <ul class="nav">
                                <li class="nav-item"><a href="javascript:void(0);" class="active nav-link">Last</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link second-tab-toggle">Current</a></li>
                            </ul>
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
                                    <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                                    <div class="scroll-area-sm">
                                        <div class="scrollbar-container">
                                            <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Ella-Rose Henry</div>
                                                                <div class="widget-subheading">Web Developer</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">
                                                                    <small class="opacity-5 pr-1">$</small>
                                                                    <span>129</span>
                                                                    <small class="text-danger pl-2">
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/5.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Ruben Tillman</div>
                                                                <div class="widget-subheading">UI Designer</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">
                                                                    <small class="opacity-5 pr-1">$</small>
                                                                    <span>54</span>
                                                                    <small class="text-success pl-2">
                                                                        <i class="fa fa-angle-up"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Vinnie Wagstaff</div>
                                                                <div class="widget-subheading">Java Programmer</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">
                                                                    <small class="opacity-5 pr-1">$</small>
                                                                    <span>429</span>
                                                                    <small class="text-warning pl-2">
                                                                        <i class="fa fa-dot-circle"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Ella-Rose Henry</div>
                                                                <div class="widget-subheading">Web Developer</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">
                                                                    <small class="opacity-5 pr-1">$</small>
                                                                    <span>129</span>
                                                                    <small class="text-danger pl-2">
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <img width="42" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="">
                                                            </div>
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Ruben Tillman</div>
                                                                <div class="widget-subheading">UI Designer</div>
                                                            </div>
                                                            <div class="widget-content-right">
                                                                <div class="font-size-xlg text-muted">
                                                                    <small class="opacity-5 pr-1">$</small>
                                                                    <span>54</span>
                                                                    <small class="text-success pl-2">
                                                                        <i class="fa fa-angle-up"></i>
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title">
                                <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                Bandwidth Reports
                            </div>
                            <div class="btn-actions-pane-right">
                                <div class="nav">
                                    <a href="javascript:void(0);" class="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab 1</a>
                                    <a href="javascript:void(0);" class="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab 2</a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="tab-eg-55">
                                <div class="widget-chart p-3">
                                    <div style="height: 350px">
                                        <canvas id="line-chart"></canvas>
                                    </div>
                                    <div class="widget-chart-content text-center mt-5">
                                        <div class="widget-description mt-0 text-warning">
                                            <i class="fa fa-arrow-left"></i>
                                            <span class="pl-1">175.5%</span>
                                            <span class="text-muted opacity-8 pl-1">increased server resources</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2 card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="widget-content">
                                                <div class="widget-content-outer">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-numbers fsize-3 text-muted">63%</div>
                                                        </div>
                                                        <div class="widget-content-right">
                                                            <div class="text-muted opacity-6">Generated Leads</div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-progress-wrapper mt-1">
                                                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style="width: 63%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="widget-content">
                                                <div class="widget-content-outer">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-numbers fsize-3 text-muted">32%</div>
                                                        </div>
                                                        <div class="widget-content-right">
                                                            <div class="text-muted opacity-6">Submitted Tickers</div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-progress-wrapper mt-1">
                                                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width: 32%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="widget-content">
                                                <div class="widget-content-outer">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-numbers fsize-3 text-muted">71%</div>
                                                        </div>
                                                        <div class="widget-content-right">
                                                            <div class="text-muted opacity-6">Server Allocation</div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-progress-wrapper mt-1">
                                                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style="width: 71%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="widget-content">
                                                <div class="widget-content-outer">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-numbers fsize-3 text-muted">41%</div>
                                                        </div>
                                                        <div class="widget-content-right">
                                                            <div class="text-muted opacity-6">Generated Leads</div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-progress-wrapper mt-1">
                                                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100" style="width: 41%;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- ======= /GRAPHIC CHART ======== -->

            <!-- ======= DATA ANALYTIC ======== -->
            <!-- <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                        <div class="widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left pr-2 fsize-1">
                                        <div class="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                    </div>
                                    <div class="widget-content-right w-100">
                                        <div class="progress-bar-xs progress">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style="width: 71%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left fsize-1">
                                    <div class="text-muted opacity-6">Income Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                        <div class="widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left pr-2 fsize-1">
                                        <div class="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                    </div>
                                    <div class="widget-content-right w-100">
                                        <div class="progress-bar-xs progress">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style="width: 54%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left fsize-1">
                                    <div class="text-muted opacity-6">Expenses Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                        <div class="widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left pr-2 fsize-1">
                                        <div class="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                    </div>
                                    <div class="widget-content-right w-100">
                                        <div class="progress-bar-xs progress">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width: 32%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left fsize-1">
                                    <div class="text-muted opacity-6">Spendings Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                        <div class="widget-content">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left pr-2 fsize-1">
                                        <div class="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                    </div>
                                    <div class="widget-content-right w-100">
                                        <div class="progress-bar-xs progress">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style="width: 89%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left fsize-1">
                                    <div class="text-muted opacity-6">Totals Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- ======= /DATA ANALYTIC ======== -->
        </div>