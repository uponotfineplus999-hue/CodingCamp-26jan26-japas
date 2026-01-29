// Ambil elemen dari HTML
// --- BAGIAN 1: Mengganti Nama (Sesuai Poin 4 Workflow) ---
function replaceName() {
    let name = prompt("Siapakah nama Anda?", "User"); // Muncul popup input
    if (name) {
        document.getElementById("user-name").innerText = name;
    }
}

// Panggil fungsi ini saat website pertama kali dimuat
replaceName();


// --- BAGIAN 2: Form Validation (Sesuai Poin 5 Workflow) ---
const contactForm = document.getElementById('contactForm');
const resultContent = document.getElementById('resultContent');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message-text').value;
    
    // --- BARU: Mengambil data Gender ---
    // Mencari input dengan nama "gender" yang sedang dicentang (:checked)
    const genderInput = document.querySelector('input[name="gender"]:checked');
    
    // Validasi: Cek apakah data kosong (termasuk gender)
    if (name === "" || email === "" || phone === "" || message === "" || !genderInput) {
        alert("Harap isi semua kolom, termasuk jenis kelamin!");
        return;
    }

    // Ambil value dari gender yang dipilih (Laki-laki/Perempuan)
    const gender = genderInput.value;

    // Tampilkan data (Jangan lupa tambahkan baris Gender di sini)
    resultContent.innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>  <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    alert("Data berhasil disubmit!");
});

