document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Button Clicks: " + count;
};