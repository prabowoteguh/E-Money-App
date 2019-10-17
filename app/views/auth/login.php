<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/x-icon" href="https://png.pngtree.com/svg/20160926/wallet_111409.png">
    <title><?= $data['title'] ?></title>

    <!-- CSS -->
    <link rel="stylesheet" href="<?= BASE_URL ?>main.css">
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/animate.css">

    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="<?= BASE_URL; ?>">
                <img src="https://png.pngtree.com/svg/20160926/wallet_111409.png" width="30" height="30" class="d-inline-block align-top" alt="">
                E-Money App
            </a>
        </div>
    </nav>

    <div class="container">
        <div class="row justify-content-center pt-5">
            <div class="col-md-8">
                <div class="main-card mb-3 card">
                    <div class="card-header">
                        <h5>Login | E-Money</h5>
                    </div>
                    <div class="card-body">

                        <form method="POST" action="" id="login_form" class="needs-validation" novalidate>
                            <div class="form-row justify-content-center">
                                <div class="col-md-10 mb-3">
                                    <label for="email">Email</label>
                                    <div class="input-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" aria-describedby="inputGroupPrepend" required>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please provide an valid email!.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row justify-content-center">
                                <div class="col-md-10 mb-3">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" required>
                                    <div class="invalid-feedback">
                                        Please provide a valid password.
                                    </div>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div class="form-row justify-content-center">
                                <div class="col-md-6 mb-3">
                                    <input type="hidden" id="data_session" name="data_session" value="">
                                    <button class="btn btn-primary btn-lg btn-block" name="btn_login" id="btn_login" type="submit">Login</button>
                                </div>
                            </div>
                        </form>

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
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<script src="<?= BASE_URL ?>assets/scripts/main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script src="<?= BASE_URL ?>../app/confjs/login.js"></script>

</html>