<?php
// include 'plugin/Get_pdf.php';

class AkademikController extends Controller
{

    public function __construct()
    {
        // #Code...
    }

    public function index()
    {
        $this->Cetak();
    }

    public function Cetak()
    {
        $pdf = new Get_pdf('../app/views/akademik/cetakkartu-pdf.php', 'KTM - ' . $_GET['Mahasiswa_Nama'] . ' - ' . date('YmdHis'), $_GET, 'A6', 'landscape');
        return $pdf;
    }
}
