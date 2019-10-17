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
            if ($_SESSION['data_user']->Role_Nama == 'Super Admin') {
                $data['title'] = 'Dashboard | Superadmin';
                $data['layout_option'] = $this->view('templates/layout_option');

                $this->view('templates/header', $data);
                $this->view('superadmin/index', $data);
                $this->view('templates/footer', $data);
            } else if ($_SESSION['data_user']->Role_Nama == 'Admin') {
                $data['title'] = 'Dashboard | ';
                $this->view('templates/header', $data);
                $this->view('admin/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Akademik') {
                $data['title'] = 'Dashboard | ';
                $this->view('templates/header', $data);
                $this->view('akademik/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Admin Kantin') {
                $data['title'] = 'Dashboard | ';
                $this->view('templates/header', $data);
                $this->view('kantin/index', $data);
                $this->view('templates/footer', $data);

                # code...
            } else if ($_SESSION['data_user']->Role_Nama == 'Keuangan') {
                $data['title'] = 'Dashboard | ';
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
}
