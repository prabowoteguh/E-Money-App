<div class="card">
    <div class="card-header">
        <h3 class="card-title">Edit Data Mahasiswa</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
        <form method="POST" action="" class="needs-validation" novalidate>
            <div class="form-group row">
                <label for="npm" class="col-sm-4 col-form-label">NPM</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="npm" name="npm" required value="<?= ($data['mhs']['Mahasiswa_Npm']); ?>">
                    <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                </div>
            </div>
            <div class="form-group row">
                <label for="nama" class="col-sm-4 col-form-label">Nama Mahasiswa</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="nama" name="nama" required value="<?= ($data['mhs']['Mahasiswa_Nama']); ?>">
                    <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                </div>
            </div>
            <div class="form-group row">
                <label for="jurusan" class="col-sm-4 col-form-label">Jurusan</label>
                <div class="col-sm-8">
                    <select class="form-control" name="jurusan" id="jurusan" required>
                        <option value="" <?= $data['mhs']['Mahasiswa_Jurusan'] == '' ? 'selected' : ''; ?>>-- Pilih --</option>
                        <option value="Akuntansi" <?= $data['mhs']['Mahasiswa_Jurusan'] == 'Akuntansi' ? 'selected' : ''; ?>>Akuntansi</option>
                        <option value="Manajemen Informatika" <?= $data['mhs']['Mahasiswa_Jurusan'] == 'Manajemen Informatika' ? 'selected' : ''; ?>>Manajemen Informatika</option>
                        <option value="Perpajakan" <?= $data['mhs']['Mahasiswa_Jurusan'] == 'Perpajakan' ? 'selected' : ''; ?>>Perpajakan</option>
                    </select>
                    <div class="invalid-feedback">Kolom tidak boleh kosong</div>
                </div>
            </div>
            <div class="form-group row">
                <label for="nama" class="col-sm-4 col-form-label">Foto</label>
                <div class="col-sm-8">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="fotoMhs" id="fotoMhs" required value="<?= $data['mhs']['Mahasiswa_Foto']; ?>" accept="image/x-png,image/jpg,image/jpeg">
                        <label class="custom-file-label" for="fotoMhs"><?= $data['mhs']['Mahasiswa_Foto'] == "" ? 'Choose File...' : $data['mhs']['Mahasiswa_Foto']; ?></label>
                        <div class="invalid-feedback">Silakan pilih file foto terlebih dahulu</div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <a href="<?= BASE_URL ?>MahasiswaController" class="btn btn-secondary">Back</a>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
        </form>
    </div>
    <!-- /.card-body -->
</div>
<!-- /.card -->
<script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    // (function() {
    //     'use strict';
    //     window.addEventListener('load', function() {
    //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //         var forms = document.getElementsByClassName('needs-validation');
    //         // Loop over them and prevent submission
    //         var validation = Array.prototype.filter.call(forms, function(form) {
    //             form.addEventListener('submit', function(event) {
    //                 if (form.checkValidity() === false) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }
    //                 form.classList.add('was-validated');
    //             }, false);
    //         });
    //     }, false);
    // })();
</script>