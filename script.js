const music = document.getElementById("music");

/* ================= BUKA UNDANGAN ================= */
function openInvite() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  music.play(); // autoplay musik setelah klik
}

/* ================= TOGGLE MUSIC ================= */
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
