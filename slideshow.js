const videos = [
  './video/background3.mp4',
  './video/background1.mp4'
  // tambah slide video disini //
];

let currentIndex = 0;
const videoElement = document.getElementById('bgVideo');

// Pastikan video siap diputar
videoElement.addEventListener('loadedmetadata', function() {
  this.play().catch(e => console.log("Autoplay blocked:", e));
});

function updateVideo() {
  videoElement.src = videos[currentIndex];
  videoElement.load();
  
  videoElement.addEventListener('canplay', function() {
    this.play().catch(e => console.log("Playback error:", e));
  }, { once: true });
}

// Navigasi video
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateVideo();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateVideo();
});

// Inisialisasi
updateVideo();
