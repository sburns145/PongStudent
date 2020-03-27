var KEY = {
  UP: 38,
  DOWN: 40,
  W: 87,
  S: 83,
}

$(function() {
  //listen to the key down events
  $(document).keydown(function(e) {
    switch(e.which) {
      case KEY.UP:  //arrow up
        //get the current paddle B's top value as an int
        var top = parseInt($("#paddleB").css("top"));
        //move paddle B up 5 pixels
        $("#paddleB").css("top",top-5);
        break;
      case KEY.DOWN: //arrow down
        var top = parseInt($("#paddleB").css("top"));
        // move paddle B down 5 pixels
        $("#paddleB").css("top", top + 5);
        break;  
      case KEY.W: //w is pressed
        var top = parseInt($("#paddleA").css("top"));
        //move paddle A up 5 pixels
        $("#paddleA").css("top",top-5);
        break;
      case KEY.S: //s
        var top = parseInt($("#paddleA").css("top"));
        //move the paddle down 5 pixels
        $("#paddleA").css("top",top + 5);
        break;
    }
  });
});
