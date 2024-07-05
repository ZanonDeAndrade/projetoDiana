document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none';
    });

    video.addEventListener('play', function() {
        playButton.style.display = 'none';
    });

    video.addEventListener('pause', function() {
        playButton.style.display = 'flex';
    });

    // Certifique-se de que o botão de play está oculto se o vídeo começar automaticamente
    if (!video.paused) {
        playButton.style.display = 'none';
    }

    window.toggleAnswer = function(element) {
        const answer = element.nextElementSibling;
        const arrow = element.querySelector('.arrow');
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.innerHTML = "&#9660;"; // seta para baixo
        } else {
            answer.style.display = "block";
            arrow.innerHTML = "&#9650;"; // seta para cima
        }
    }    
});