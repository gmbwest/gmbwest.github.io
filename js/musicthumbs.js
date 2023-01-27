
  function showPopularPosts(json) {
    var postList = json.feed.entry;
    var cssClass = "Popular-post-music";
    var thumbnailSize = "s100";
    var numPosts = 5;

    for (var i = 0; i < numPosts; i++) {
      var postTitle = postList[i].title.$t;
      var postThumbnail = postList[i].media$thumbnail.url.replace("/s72-c/","/"+thumbnailSize+"/");
      var postLink = postList[i].link[4].href;

      document.write('<div class="' + cssClass + '">');
      document.write('<a href="' + postLink + '">');
      document.write('<img src="' + postThumbnail + '" alt="' + postTitle + '"/>');
      document.write('<h3>' + postTitle + '</h3>');
      document.write('</a></div>');
    }
  }
