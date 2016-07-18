/* You will save your code during today's demos and exercises here. */
function fadeImage() {
  $('img').fadeToggle();
}

function setup() {
  $('#android').click(fadeImage);
}

$(document).ready(setup);
