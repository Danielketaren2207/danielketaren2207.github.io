const text = "Hi, I'm Daniel Andrew Ketaren";
const typingContainer = document.getElementById("typingContainer");
let index = 0;

function type() {
    if (index < text.length) {
        typingContainer.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Mengatur kecepatan ketikan (100ms)
    }
}

// Memulai animasi ketikan setelah halaman dimuat
window.onload = type;