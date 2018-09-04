function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('landing-video', {
        videoId: '4D8D0z1ZOzI',
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            rel: 0,
            modestbranding: 1,
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
}
