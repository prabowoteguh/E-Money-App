<table style="border:1px black solid;">
    <tr height="10" style="background-color: yellow">
        <td align="center" colspan="3" width="130">POLITEKNIK PRAKTISI BANDUNG</td>
        <td rowspan="3" width="80" align="center"><img width="80" src="assets/images/PRAKTISI.png" alt=""></td>
    </tr>
    <tr height="10" style="background-color: yellow">
        <td align="center" colspan="3">Jalan Merdeka No. 46 Bandung 40171</td>
    </tr>
    <tr height="10" style="background-color: yellow">
        <td align="center" colspan="3">Kartu Tanda Mahasiswa</td>
    </tr>
    <tr>
        <td rowspan="4" width="80" class="text-center"><img width="80" src="<?= (($_GET['Mahasiswa_Foto'] == '') ? 'assets/images/avatars/student.png' : 'assets/images/avatars/' . $_GET['Mahasiswa_Foto']) ?>" alt=""></td>
        <td width="80">Npm</td>
        <td width="20" align="center">:</td>
        <td width="130"><?= $_GET['Mahasiswa_Npm'] ?></td>
    </tr>
    <tr>
        <td>Nama</td>
        <td align="center">:</td>
        <td><?= $_GET['Mahasiswa_Nama'] ?></td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td align="center">:</td>
        <td><?= $_GET['Mahasiswa_Jurusan'] ?></td>
    </tr>
    <tr>
        <td>Tahun Angkatan</td>
        <td align="center">:</td>
        <td><?= $_GET['Mahasiswa_Tahun_Angkatan'] ?></td>
    </tr>
</table>