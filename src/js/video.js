window.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.video');
    video.addEventListener('click', function () {
        if (video.classList.contains('ready')) {
            return;
        }
        video.classList.add('ready');
      video.insertAdjacentHTML('afterbegin', '  <iframe class="youtube-video" src="https://www.youtube.com/embed/DISjdfkSjc8?autoplay=1" width="100%" autoplaytitle="YouTube video player"frameborder="15px"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>');
  });
});





