$(function () {
    $('#datamahasiswa').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
    });
});

// $('#fotoMhs').change(function () {
//     console.log('OK');

//     var filename = $('#fotoMhs').val();
//     $('#filenamefotoMhs').html(filename);
// });


// $('#fotoMhs').on('change', function () {
//     console.log('OK');
//     $('#filenamefotoMhs').val(this.value);
// });

$('#btn_delete').on('click', function (e) {
    e.preventDefault();

    Swal.fire({
        title: 'Are you sure?',
        text: "Apakah kamu yakin ingin menghapus data mahasiswa dengan nama " + $(this).data('nama'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
});


// $('#btn_edit').on('click', function (e) {
//     e.preventDefault();

//     var id = $(this).data('id');
//     $.ajax({
//         url: $(this).data('baseurl') + 'MahasiswaController/show',
//         type: 'POST',
//         dataType: 'JSON',
//         data: {
//             'Mahasiswa_ID': id
//         },
//         success: function (r) {
//             if (r.status == 0) {
//                 var mhs = (r.mhs);
//                 console.log(r);
//                 // $('#id').val(mhs.Mahasiswa_ID);
//                 $('#npm').val(mhs.Mahasiswa_Npm);
//                 $('#nama').val(mhs.Mahasiswa_Nama);
//             }
//         }

//     });
// });