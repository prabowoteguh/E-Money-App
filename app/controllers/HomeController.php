<?php

class HomeController extends Controller
{

    public function __construct()
    {
        // #Code...
    }

    public function index()
    {
        $data = [];
        if (isset($_SESSION['data_user'])) {
            if ($_SESSION['data_user']->Role_Nama == 'Super Admin' || $_SESSION['data_user']->Role_Nama == 'Developer') {
                $data['title'] = 'Dashboard | ' . $_SESSION['data_user']->Role_Nama;
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('superadmin/index', $data);
                $this->view('templates/footer', $data);
            } else if ($_SESSION['data_user']->Role_Nama == 'Admin') {
                $data['title'] = 'Dashboard | ' . $_SESSION['data_user']->Role_Nama;
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('admin/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Akademik') {
                $data['title'] = 'Dashboard | ' . $_SESSION['data_user']->Role_Nama;
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('akademik/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Admin Kantin') {
                $data['title'] = 'Dashboard | ' . $_SESSION['data_user']->Role_Nama;
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('kantin/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Keuangan') {
                $data['title'] = 'Dashboard | ' . $_SESSION['data_user']->Role_Nama;
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('keuangan/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else {
                header("Location: " . BASE_URL);
            }
        } else {
            header("Location: " . BASE_URL);
        }
    }

    function rupiah($nilai = 0)
    {
        $string = "Rp " . number_format($nilai);
        return $string;
    }

    public function uploadFile()
    {
        /* Getting file name */
        $filename = $_FILES['file']['name'];

        /* Location */
        $location = "assets/images/avatars/" . $filename;
        $uploadOk = 1;
        $imageFileType = pathinfo($location, PATHINFO_EXTENSION);

        /* Valid Extensions */
        $valid_extensions = array("jpg", "jpeg", "png");
        /* Check file extension */
        if (!in_array(strtolower($imageFileType), $valid_extensions)) {
            $uploadOk = 0;
        }

        if ($uploadOk == 0) {
            echo 0;
        } else {
            /* Upload file */
            if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
                echo $location;
            } else {
                echo 0;
            }
        }
    }
}
