function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomDivId() {
  let d = randomInteger(1, 6);
  let n;
  if (d === 1) {
  		n = randomInteger(1, 5);
  }
  else if (d === 2) {
  		n = randomInteger(1, 6);
  }
  else if (d === 3) {
  		n = randomInteger(1, 4);
  }
  else if (d === 4) {
  		n = randomInteger(1, 5);
  }
  else if (d === 5) {
  		n = randomInteger(1, 6);
  }
  else if (d === 6) {
  		n = randomInteger(1, 5);
  }
  else {
  	alert("ошибка!")
  };


  return `#slot-${d}${n}`;
}
