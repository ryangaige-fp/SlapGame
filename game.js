var health = 100;
var hits = -1;

function slap() {
  health -= 1;
  update();
}

function punch() {
  health -= 5;
  update();
}

function kick() {
  health -= 10;
  update();
}

function increaseHits() {
  hits++;
}

function update() {
  increaseHits();
  document.getElementById("health").innerText = health;
  document.getElementById("hits").innerText = hits;
  document.getElementById("progress").style.width = health + "%";

  if (health <= 0) {
    document.getElementById("progress").style.width = 0;
    document.getElementById("health").innerText = 0;
  }

  // if (health == 0) {
  //   alert: "You die";
  // } else {
  // }

  // console.log(health);

  // hits++;
  // console.log(hits);
}

update();
