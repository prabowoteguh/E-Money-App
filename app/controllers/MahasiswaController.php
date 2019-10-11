<?php

class MahasiswaController extends Controller
{
    public function index()
    {
        $data['title'] = 'Mahasiswa';
        $data['mahasiswa'] = 'active';
        $data['data_mahasiswa'] = $this->model('MahasiswaModel')->show();

        $this->view('templates/header', $data);
        $this->view('mahasiswa', $data);
        $this->view('templates/modalsMahasiswa', $data);
        $this->view('templates/footer');
    }

    public function store()
    {
        if ($this->model('MahasiswaModel')->store($_POST) > 0) {
            exit;
        }
        header('Location: ' . BASE_URL . 'MahasiswaController');
    }

    public function show($id)
    {
        // code/
    }

    public function edit($id)
    {
        $param = (int) $id;
        $data['title'] = 'Mahasiswa';
        $data['mahasiswa'] = 'active';
        $data['mhs'] = $this->model('MahasiswaModel')->edit($param);

        $this->view('templates/header', $data);
        $this->view('editMahasiswa', $data);
        $this->view('templates/footer');
        // return json_encode($data);
    }

    public function update(Request $request, $id)
    {
        // code
    }

    public function destroy(Request $request)
    {
        // code
    }
}
