<div class="card">
    <div class="card-header">
        <?php Flash::flash(); ?>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h3 class="card-title"><a href="" class="btn btn-primary" data-toggle="modal" data-target="#modalTambah"><i class="fa fa-plus"></i> Tambah</a></h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
        <table id="datamahasiswa" class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th style="width: 10px">#</th>
                    <th>NPM</th>
                    <th>Nama</th>
                    <th>Jurusan</th>
                    <th>Foto</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($data['data_mahasiswa'] as $v => $mhs) : ?>
                    <tr>
                        <td><?= ($v + 1); ?></td>
                        <td><?= $mhs->Mahasiswa_Npm; ?></td>
                        <td><?= $mhs->Mahasiswa_Nama; ?></td>
                        <td><?= $mhs->Mahasiswa_Jurusan; ?></td>
                        <td class="text-center"><img class="rounded-circle shadow" width="40" src="<?php $foto = ($mhs->Mahasiswa_Foto == '') ? BASE_URL . 'img/teguh.png' : BASE_URL . 'img/' . $mhs->Mahasiswa_Foto;
                                                                                                        echo $foto ?>" alt=""></td>
                        <td class="text-center">
                            <a href="<?= BASE_URL ?>MahasiswaController/edit/<?= $mhs->Mahasiswa_ID; ?>" id="btn_edit" class="btn btn-warning" data-togle="modal" data-target="#modalEdit"><i class="fa fa-pen"></i> Edit</a>
                            <a href="<?= BASE_URL ?>" data-id="<?= $mhs->Mahasiswa_ID ?>" data-nama="<?= $mhs->Mahasiswa_Nama; ?>" id="btn_delete" class="btn btn-danger"><i class="fa fa-trash"></i> Delete</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
            <tfoot>
                <tr>
                    <th style="width: 10px">#</th>
                    <th>NPM</th>
                    <th>Nama</th>
                    <th>Jurusan</th>
                    <th>Foto</th>
                    <th class="text-center">Action</th>
                </tr>
            </tfoot>
        </table>
    </div>
    <!-- /.card-body -->
</div>
<!-- /.card -->