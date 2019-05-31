
	var mediaElements = document.querySelectorAll('video, audio');

	for (var i = 0, total = mediaElements.length; i &lt; total; i++) {
		new MediaElementPlayer(mediaElements[i], {
			features: ['prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume', 'playlist', 'shuffle', 'loop', 'fullscreen'],
		});
	}
