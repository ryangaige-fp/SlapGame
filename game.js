// let health = 100;
let hits = 0;

let char1 = {
  name: "Pale Guy",
  health: 100,
  items: []
};

let Character = function(name, health) {
  this.name = name;
  this.health = health;
  items: [];
};

let Obj = function(name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
  items: [];
};

let items = {
  mushroom: new Obj(
    "Magic shroom 'Brah'",
    5,
    "eat these and your health will grow grow grow!"
  ),
  soul: new Obj("Soul Drain", 40, "Sucks out your soul and regenerates life!"),
  lifePotion: new Obj(
    "Life Potion",
    15,
    "Given to you from the old lady in the cave, restores your health!"
  )
};

function giveMushroom() {
  char1.items.push("mushroom");
  char1.health += 5;

  update();
}

function giveSoul() {
  char1.items.push("soul");
  char1.health += 40;
  update();
}

function giveLifePotion() {
  char1.items.push("lifePotion");
  char1.health += 15;
  update();
}

function slap() {
  // if (
  //   document.getElementById("monsterImage").src == "Assets/Photos/Dhalsim.gif"
  // ) {
  //   document.getElementById("monsterImage").src = "Assets/Photos/Dhalsim.gif";
  // } else {
  //   document.getElementById("monsterImage").src = "Assets/Photos/punching.gif";
  // }
  char1.health -= 1;
  increaseHits();
  update();
}

function punch() {
  // if (
  //   document.getElementById("monsterImage").src == "Assets/Photos/Dhalsim.gif"
  // ) {
  //   document.getElementById("monsterImage").src = "Assets/Photos/Dhalsim.gif";
  // } else {
  //   document.getElementById("monsterImage").src = "Assets/Photos/dhalPunch.gif";
  // }

  char1.health -= 5;
  increaseHits();
  update();
}

function kick() {
  // if (
  //   document.getElementById("monsterImage").src == "Assets/Photos/Dhalsim.gif"
  // ) {
  //   document.getElementById("monsterImage").src = "Assets/Photos/Dhalsim.gif";
  // } else {
  //   document.getElementById("monsterImage").src =
  //     "Assets/Photos/Dhalsim-SFA2-Heavy-Air-Kick.gif";
  // }

  char1.health -= 10;
  increaseHits();
  update();
}

function increaseHits() {
  hits++;
}

function update() {
  document.getElementById("health").innerText = char1.health;
  document.getElementById("hits").innerText = hits;
  document.getElementById("progress").style.width = char1.health + "%";
  document.getElementById("EnemyName").innerText = char1.name;

  if (char1.health <= 0) {
    char1.health = 0;
    document.getElementById("progress").style.width = 0;
    document.getElementById("health").innerText = 0;
  }

  if (char1.health >= 100) {
    char1.health = 100;
    document.getElementById("progress").style.width = 100;
    document.getElementById("health").innerText = 100;
  }

  // if (health == 0) {
  //   alert: "You die";
  // } else {
  // }
}

update();
