
 var i = 0
 var speed = 50
 var txt="Hi! We wanted something that differentiated us from the other projects out there. Something that had an actual use case other than just being another crypto project. So we created Die and Retry to cater to our gamer centric crypto fans. With extreme APY yield farming, DeFi features, NFTs and plans for the future that will blow you away, we believe we have achieved this goal. So what are you waiting for? Why not have a go?"
function fn(){ if (i < txt.length) {
    document.querySelector(".type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(fn, speed);
  }};
  $('.newbody').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});
