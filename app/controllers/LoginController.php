<?php

class LoginController extends Controller
{
    public function __construct()
    {
        // session_start();
    }
    public function index()
    {
        if (isset($_SESSION['data_user'])) {
            header("Location: " . BASE_URL . "homecontroller");
        } else {
            $data['title'] = 'E-Money App | Login';
            $this->view('auth/login', $data);
        }
    }

    public function login()
    {
        $data_user = json_decode($_POST['data_session']);
        $_SESSION['data_user'] = $data_user;

        header("Location: " . BASE_URL . "homecontroller");
    }

    public function logout()
    {
        session_destroy();
        header("Location: " . BASE_URL);
    }
}
