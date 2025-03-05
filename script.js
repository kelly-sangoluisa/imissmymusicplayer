//parar la animacion con el play 
document.getElementById('play-btn').addEventListener('click', function() {
    var disc = document.querySelector('.player-box img');
    var playbtn = document.getElementById('play-btn');
    if (disc.classList.contains('stopped')) {
        disc.classList.remove('stopped');
        //cambiar play a pause
        playbtn.innerHTML = '<i class="fas fa-pause"></i>';

    } else {
        disc.classList.add('stopped');
        playbtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

 