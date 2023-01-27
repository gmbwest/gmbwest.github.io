jQuery.getScript("//cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){
  var delay = 30 * 60 * 1000; // 30 minutes in milliseconds
  var postViewElements = document.getElementsByClassName("post-view");
  for (var i = 0; i < postViewElements.length; i++) {
    var postViewElement = postViewElements[i];
    var postId = postViewElement.getAttribute("data-id");
    var postViewCountElement = postViewElement.parentNode.querySelector("#postviews");
    postViewCountElement.classList.add("view-load");
    var firebaseRef = new Firebase("https://post-view-st.firebaseio.com/pages/id/" + postId);
    firebaseRef.once("value", function(snapshot) {
      var postData = snapshot.val();
      if (postData == null) {
        postData = {
          value: 0,
          url: window.location.href,
          id: postId
        };
        firebaseRef.set(postData);
      }
      postViewCountElement.classList.remove("view-load");
      postViewCountElement.textContent = postData.value;
      if (postData.value < 16) {
        postData.value++;
        firebaseRef.child("value").set(postData.value);
      } else {
        setTimeout(function() {
          postData.value++;
          firebaseRef.child("value").set(postData.value);
          setInterval(function() {
            postData.value = 0;
            firebaseRef.set(postData);
          }, delay);
        }, delay);
      }
    });
  }
});




