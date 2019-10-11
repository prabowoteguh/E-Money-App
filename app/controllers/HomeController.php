<?php

class HomeController extends Controller
{
    // private $db;

    // public function __construct()
    // {
    //     $this->db = new Database;
    // }

    public function index()
    {
        $data['title'] = 'Dashboard';
        $data['dashboard'] = 'active';
        $this->view('templates/header', $data);
        $this->view('dashboard', $data);
        $this->view('templates/footer', $data);
    }

    public function TestDB()
    {
        $this->view('test');
    }
}
