document.getElementById('celebrateBtn').addEventListener('click', function() {
    const nameElement = document.getElementById('name-placeholder');
    const confetti = document.getElementById('confetti');

    // Ganti nama jika tombol diklik
    nameElement.textContent = "🎉 ARUMM 🎉";

    // Tampilkan animasi confetti
    confetti.style.display = 'block';

    // Buat partikel confetti
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.appendChild(confettiPiece);
    }

    // Hapus confetti setelah animasi selesai
    setTimeout(function() {
        confetti.style.display = 'none';
        confetti.innerHTML = '';  // Menghapus semua partikel confetti
    }, 3000);
});
