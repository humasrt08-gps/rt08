const API_URL = 'https://script.google.com/macros/s/AKfycbz9-p9pbbgpssybEiO-ti3MshnwcTExrVRPW4Mkm1tpOkYBRclWVbe3rvq5CNmAwvhb/exec';

async function loadNama() {

    const response = await fetch(API_URL);
    const result = await response.json();

    // Ambil nama unik
    const namaUnik = [...new Set(
        result.data
            .map(item => item.Nama)
            .filter(nama => nama)
    )].sort();

    const datalist = document.getElementById('listNama');

    datalist.innerHTML = namaUnik
        .map(nama => `<option value="${nama}">`)
        .join('');
}

loadNama();
