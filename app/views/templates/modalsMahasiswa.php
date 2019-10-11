<!-- Modal Edit -->
<div class="modal fade bd-example-modal-lg" id="modalTambah" tabindex="-1" role="dialog" aria-labelledby="editMahasiswa" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editMahasiswa">Data Mahasiswa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" action="<?= BASE_URL ?>MahasiswaController/store" class="was-validation" novalidate>
                    <div class="form-group row">
                        <label for="npm" class="col-sm-4 col-form-label">NPM</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="npm" name="Mahasiswa_Npm" required value="">
                            <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="nama" class="col-sm-4 col-form-label">Nama Mahasiswa</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="nama" name="Mahasiswa_Nama" required value="">
                            <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="jurusan" class="col-sm-4 col-form-label">Jurusan</label>
                        <div class="col-sm-8">
                            <select class="form-control" name="Mahasiswa_Jurusan" id="jurusan" required>
                                <option value="">-- Pilih --</option>
                                <option value="Akuntansi">Akuntansi</option>
                                <option value="Manajemen Informatika">Manajemen Informatika</option>
                                <option value="Perpajakan">Perpajakan</option>
                            </select>
                            <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="nama" class="col-sm-4 col-form-label">Foto</label>
                        <div class="col-sm-8">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="Mahasiswa_Foto" id="validatedCustomFile" required accept="image/x-png,image/jpg,image/jpeg">
                                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                <div class="invalid-feedback">Silakan pilih file foto terlebih dahulu</div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

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