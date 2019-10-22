<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" type="image/x-icon" href="https://png.pngtree.com/svg/20160926/wallet_111409.png">
    <title><?= $data['title']; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Bootstrap 4 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- PACKAGE CSS -->
    <link rel="stylesheet" href="<?= BASE_URL ?>main.css">
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/animate.css">
    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/7a4dfbbce0.js" crossorigin="anonymous"></script>
    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Data Table -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/jq-3.3.1/jszip-2.5.0/dt-1.10.20/af-2.3.4/b-1.6.1/b-colvis-1.6.1/b-flash-1.6.1/b-html5-1.6.1/b-print-1.6.1/kt-2.5.1/r-2.2.3/sc-2.0.1/sl-1.3.1/datatables.min.css" />

</head>

<body>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <strong>E-Money Apps</strong>
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
            <div class="app-header__content">
                <div class="app-header-left">
                    <!-- <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search">
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div> -->
                    <!-- <ul class="header-menu nav">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-database"> </i>
                                Statistics
                            </a>
                        </li>
                        <li class="btn-group nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-edit"></i>
                                Projects
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-cog"></i>
                                Settings
                            </a>
                        </li>
                    </ul> -->
                </div>

                <div class="app-header-right">
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="btn-group">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                            <img width="42" class="rounded-circle" src="<?= BASE_URL ?>assets/images/avatars/<?= $_SESSION['data_user']->User_Foto != '' ? $_SESSION['data_user']->User_Foto : 'student.png'; ?>" alt="">
                                            <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" class="dropdown-item" disabled> <i class="fa fa-gear"></i><span class="pl-2"> User Account</span></button>
                                            <button id="btn_change_password" type="button" tabindex="0" class="dropdown-item" data-toggle="modal" data-target="#modal_ubah_password" data-backdrop="false"> <i class="fa fa-key"></i><span class="pl-2"> Change Password</span></button>
                                            <!-- <h6 tabindex="-1" class="dropdown-header">Header</h6> -->
                                            <!-- <button type="button" tabindex="0" class="dropdown-item">Actions</button> -->
                                            <div tabindex="-1" class="dropdown-divider"></div>
                                            <a tabindex="0" class="dropdown-item" href="<?= BASE_URL ?>logincontroller/logout"> <i class="fa fa-power-off"></i><span class="pl-2"> Logout</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left  ml-3 header-user-info">
                                    <div class="widget-heading">
                                        <?= $_SESSION['data_user']->User_Nama ?>
                                    </div>
                                    <div class="widget-subheading">
                                        <?= $_SESSION['data_user']->Role_Nama ?>
                                    </div>
                                </div>
                                <!-- <div class="widget-content-right header-user-info ml-3">
                                    <button type="button" class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                        <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                                    </button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Ubah Password -->
                <div class="modal fade mt-5" id="modal_ubah_password" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ubah Password</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="widget-content p-0 mb-5">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                                <img width="40" class="rounded-circle" src="<?= BASE_URL ?>assets/images/avatars/<?= (($_SESSION['data_user']->User_Foto == '') ? 'student.png' : $_SESSION['data_user']->User_Foto) ?>" alt="avatar">
                                            </div>
                                        </div>
                                        <div class="widget-content-left flex2">
                                            <div class="widget-heading"><?= $_SESSION['data_user']->User_Nama ?></div>
                                            <div class="widget-subheading opacity-7"><?= $_SESSION['data_user']->User_Email ?></div>
                                        </div>
                                        <div class="widget-content-right">
                                            <button class="btn" id="btn_see_password"><i id="lihat_password" class="fa fa-3x fa-eye-slash"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <form method="POST" class="needs-validation" novalidate>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                            <label for="old_password">Current Password</label>
                                            <input type="password" class="form-control" id="old_password" placeholder="" name="old_password" required>
                                            <div class="invalid-feedback">
                                                Please complete your curent password!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                            <label for="new_password">New Password</label>
                                            <input type="password" class="form-control" id="new_password" placeholder="" name="new_password" required>
                                            <div class="invalid-feedback">
                                                Please complete your password!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                            <label for="verification_password">Password Verification</label>
                                            <input type="password" class="form-control" id="verification_password" placeholder="" name="verification_password" required>
                                            <div class="invalid-feedback">
                                                Your password doesn't match!
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="current_password" id="current_password" value="<?= $_SESSION['data_user']->User_Password; ?>">
                                    <input type="hidden" name="User_Id" id="User_Id" value="<?= $_SESSION['data_user']->User_Id; ?>">
                                    <input type="hidden" name="User_Nama" id="User_Nama" value="<?= $_SESSION['data_user']->User_Nama; ?>">
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                                        <button type="submit" class="btn btn-primary btn_save_password">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Modal Ubah Password -->

            </div>
        </div>