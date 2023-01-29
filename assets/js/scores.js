function callHighScore() {

    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
  
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      // create li tag for each high score
      var tagLI = document.createElement('li');
      tagLI.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      // display on page
      var listOl = document.getElementById('highscores');
      listOl.appendChild(tagLI);
      
    }
  }
  
  function removeScore() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.querySelector('#clear').onclick = removeScore;
  
  // run function when page loads
callHighScore();