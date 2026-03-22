// 1. Inisialisasi AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// 2. Fungsi Buka Undangan
function startWedding() {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('weddingMusic');

    music.play().catch(error => console.log("Musik diputar setelah interaksi."));

    overlay.style.transform = "translateY(-100%)";
    
    // TAMBAHKAN BARIS INI:
    startSlideshow(); 
    
    setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);
}

// 3. Logika Form Ucapan
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const message = document.getElementById('userMessage').value;
    const list = document.getElementById('commentList');

    // Buat elemen komentar baru
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.style.borderBottom = "1px solid #eee";
    newComment.style.padding = "10px 0";
    newComment.innerHTML = `<b>${name}:</b> <p>${message}</p>`;

    // Masukkan ke posisi paling atas daftar
    list.prepend(newComment);

    // Reset Form
    this.reset();
});

function startSlideshow() {
    const images = document.querySelectorAll('.gallery-bg img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 4000); // Ganti foto setiap 4 detik
}

// Jalankan slideshow setelah DOM siap
document.addEventListener('DOMContentLoaded', startSlideshow);