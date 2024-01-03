var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let lastClickedButton = null;

// Fungsi inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("button1");
  showTimestamp1(); // Memanggil fungsi showTimestamp1 untuk mengaktifkan button1
});

function showTimestamp1() {
  const button1 = document.getElementById("button1");
  const timestampElements = document.querySelectorAll(".box-img .timestamp");

  if (lastClickedButton !== button1) {
    button1.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    button1.style.borderRadius = "100px";

    timestampElements.forEach((timestampElement) => {
      timestampElement.style.display = "none";
    });

    if (lastClickedButton) {
      lastClickedButton.style.backgroundColor = "";
      lastClickedButton.style.borderRadius = "";
    }

    lastClickedButton = button1;
  }

  // Tambahkan logika lain sesuai kebutuhan
}

function showTimestamp2() {
  const button2 = document.getElementById("button2");
  const timestampElements = document.querySelectorAll(".box-img .timestamp");

  if (lastClickedButton !== button2) {
    button2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    button2.style.borderRadius = "100px";

    timestampElements.forEach((timestampElement) => {
      timestampElement.style.display = ""; // Menampilkan kembali .timestamp
      timestampElement.innerHTML =
        '<img src="assets/berita/timestamp.png" alt="Camera Icon" class="camera-icon"><span class="timestamp-text">5 foto</span>'; // Menampilkan kembali .timestamp
    });

    if (lastClickedButton) {
      lastClickedButton.style.backgroundColor = "";
      lastClickedButton.style.borderRadius = "";
    }

    lastClickedButton = button2;
  }

  // Tambahkan logika lain sesuai kebutuhan
}

function showTimestamp3() {
  const button3 = document.getElementById("button3");
  const timestampElements = document.querySelectorAll(".box-img .timestamp");

  if (lastClickedButton !== button3) {
    button3.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    button3.style.borderRadius = "100px";

    timestampElements.forEach((timestampElement) => {
      timestampElement.style.display = ""; // Menampilkan kembali .timestamp
      timestampElement.innerHTML =
        '<img src="assets/berita/timestamp2.png" alt="Camera Icon" class="camera-icon"><span class="timestamp-text">01:45</span>';
    });

    if (lastClickedButton) {
      lastClickedButton.style.backgroundColor = "";
      lastClickedButton.style.borderRadius = "";
    }

    lastClickedButton = button3;
  }

  // Tambahkan logika lain sesuai kebutuhan
}
