window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());

function onYouTubeIframeAPIReady() {
    if (!window.isMobile) {
        var player;
        player = new YT.Player('landing-video', {
            videoId: '4D8D0z1ZOzI',
            playerVars: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                showinfo: 0,
                disablekb: 1,
                playlist: '4D8D0z1ZOzI'
            },
            events: {
                onReady: function(e) {
                    e.target.mute();
                    e.target.playVideo();
                }
            }
        });
    } else {
        var landingimg = document.createElement("img");
        landingimg.src = "/assets/img/landingimg.jpg";
        landingimg.style = "object-fit: cover; width: 100%; height: 100%;"
        document.getElementById('landing-video').appendChild(landingimg);
    }
}
