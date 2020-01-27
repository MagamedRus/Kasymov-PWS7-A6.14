const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;


function round() {
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  if (hits === maxHits) {
    endGame();
  }
}

function countTime() {
  firstHitTime = getTimestamp();
}

function endGame() {
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#win-message").removeClass("d-none");
  $(".align-text-bottom").addClass('d-none');
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    $(".game-field").removeClass("target");
    hits = hits + 1;
    round();
  }
}

function init() {
  round();
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();

  });
  countTime();
}

$(document).ready();