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


//LEER INFO DEL ARCHIVO MP3
document.getElementById('file-input').addEventListener('change', function(event) {
    var input = event.target;
    if (input.files && input.files.length > 0) {
        var file = input.files[0];
        if (file.name.toLowerCase().endsWith('.mp3')) {
            console.log('Archivo MP3 seleccionado:', file.name);
            // Leer los metadatos del archivo MP3
            jsmediatags.read(file, {
                onSuccess: function(tag) {
                    var title = tag.tags.title;
                    var artist = tag.tags.artist;
                    var album = tag.tags.album;
                    var duration = tag.tags.duration;
                    var picture = tag.tags.picture;

                    document.getElementById('song-title').textContent = title;
                    document.getElementById('song-artist').textContent = artist;

                    // Verificar si la imagen existe antes de mostrarla
                    if (picture) {
                        var base64String = '';
                        for (var i = 0; i < picture.data.length; i++) {
                            base64String += String.fromCharCode(picture.data[i]);
                        }
                        var imageUrl = 'data:' + picture.format + ';base64,' + window.btoa(base64String);
                        var imgElement = document.getElementById('song-picture');
                        imgElement.src = imageUrl;
                        imgElement.style.display = 'block';
                    } else {
                        // Si no hay imagen, ocultar el contenedor de la imagen
                        document.getElementById('song-picture').style.display = 'none';
                    }
                },
                onError: function(error) {
                    console.log('Error leyendo los metadatos:', error);
                }
            });
        } else {
            alert('Por favor, selecciona un archivo MP3.');
        }
    }
});