// JavaScript Document

 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      document.getElementById("quiz").style.display = "none";

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '600',
          width: '1024',
          videoId: 'duUp8K-dIto',
          playerVars: { 'autoplay': 1, 'controls': 1 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
        	document.getElementById("quiz").style.display = "none";
          done = true;
        }
        else if (event.data == YT.PlayerState.ENDED) {
       	document.getElementById("player").style.display = "none";
    	document.getElementById("quiz").style.display = "block";
  }
      }
      function stopVideo() {
        player.stopVideo();
      }