const API_URL = 'https://script.google.com/macros/s/AKfycbz9-p9pbbgpssybEiO-ti3MshnwcTExrVRPW4Mkm1tpOkYBRclWVbe3rvq5CNmAwvhb/exec';

let dataWarga = [];

async function loadData() {

    const response = await fetch(API_URL);
    const result = await response.json();

    dataWarga = result.data;

    const namaUnik = [...new Set(
        dataWarga.map(item => item.Nama)
    )];

    document.getElementById('listNama').innerHTML =
        namaUnik.map(nama => `<option value="${nama}">`).join('');
}

document.getElementById('nama').addEventListener('change', function() {

    const warga = dataWarga.find(
        item => item.Nama === this.value
    );

    if (!warga) return;

    document.getElementById('nik').value = warga['No KTP'] || '';
    document.getElementById('jk').value = warga['Jenis Kelamin'] || '';
    document.getElementById('tempat').value = warga['Tempat Lahir'] || '';
    document.getElementById('tgl_lahir').value = warga['Tanggal lahir'] || '';
    document.getElementById('wn').value = warga.Kewarganegaraan || '';
    document.getElementById('alamat_ktp').value = warga['Alamat KTP'] || '';
    document.getElementById('blok').value = warga.Blok || '';
    document.getElementById('no_rumah').value = warga.Nomor || '';
});

loadData();
