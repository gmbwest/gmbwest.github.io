
	var mediaElements = document.querySelectorAll(&#39;video, audio&#39;);
	for (var i = 0, total = mediaElements.length; i &lt; total; i++) {
		new MediaElementPlayer(mediaElements[i], {
            previewMode: true,
            muteOnPreviewMode: true,
            fadeOutAudioInterval: 200,
            fadeOutAudioStart: 10,
            fadePercent: 0.02,
			features: [&#39;playpause&#39;, &#39;current&#39;, &#39;progress&#39;, &#39;duration&#39;, &#39;volume&#39;, &#39;fullscreen&#39;, &#39;preview&#39;],
		});
	}
 
