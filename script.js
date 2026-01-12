function openInvitation() {
    document.querySelector('.cover').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
  
    const music = document.getElementById('bg-music');
    music.play();
  }
  