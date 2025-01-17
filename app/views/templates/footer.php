               <div class="app-wrapper-footer">
                   <div class="app-footer">
                       <div class="app-footer__inner">
                           <div class="app-footer-left">
                               <ul class="nav">
                                   <li class="nav-item">
                                       <strong>E-Money </strong> Apps | <?= date('Y') ?>
                                   </li>
                               </ul>
                           </div>
                           <div class="app-footer-right">
                               <ul class="nav">
                                   <li class="nav-item">
                                       Version <strong>Beta</strong> 1.0
                                   </li>
                                   <!-- <li class="nav-item">
                                       <a href="javascript:void(0);" class="nav-link">
                                           <div class="badge badge-success mr-1 ml-0">
                                               <small>NEW</small>
                                           </div>
                                           Footer Link 4
                                       </a>
                                   </li> -->
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
               </div>
               </div>

               </body>
               <!-- Package Javascript -->
               <script src="<?= BASE_URL ?>assets/scripts/main.js"></script>

               <!-- Bootstrap JS -->
               <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
               <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

               <!-- Data Table -->
               <script type="text/javascript" src="https://cdn.datatables.net/v/bs4-4.1.1/jq-3.3.1/jszip-2.5.0/dt-1.10.20/af-2.3.4/b-1.6.1/b-colvis-1.6.1/b-flash-1.6.1/b-html5-1.6.1/b-print-1.6.1/cr-1.5.2/fc-3.3.0/fh-3.1.6/kt-2.5.1/r-2.2.3/rg-1.1.1/rr-1.2.6/sc-2.0.1/sl-1.3.1/datatables.min.js"></script>
               <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script> -->
               <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script> -->

               <!-- Sweetallert 2 -->
               <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
               <!-- Function JS -->
               <script src="<?= BASE_URL ?>../app/confjs/global.js"></script>
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

               <!-- ConfJS untuk fungsi2 setiap views role -->
               <?php

                if ($_SESSION['data_user']->Role_Nama == 'Super Admin' || $_SESSION['data_user']->Role_Nama == 'Developer') {
                    ?>
                   <script src="<?= BASE_URL ?>../app/confjs/super.js"></script>

               <?php
                } else if ($_SESSION['data_user']->Role_Nama == 'Admin Parkir') {
                    ?>
                   <script src="<?= BASE_URL ?>../app/confjs/parkir.js"></script>

               <?php
                } else if ($_SESSION['data_user']->Role_Nama == 'Akademik') {
                    ?>
                   <script src="<?= BASE_URL ?>../app/confjs/akademik.js"></script>

               <?php
                } else if ($_SESSION['data_user']->Role_Nama == 'Admin Kantin') {
                    ?>
                   <script src="<?= BASE_URL ?>../app/confjs/kantin.js"></script>

               <?php
                } else if ($_SESSION['data_user']->Role_Nama == 'Keuangan') {
                    ?>
                   <script src="<?= BASE_URL ?>../app/confjs/keuangan.js"></script>

               <?php
                } else {
                    //#code..
                }
                ?>

               </html>