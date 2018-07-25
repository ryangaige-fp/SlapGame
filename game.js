// let health = 100;
let hits = -1;

let paleGuy = {
  name: "Pale Guy",
  health: 100,
  items: []
};

let Obj = function(name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
  items: [];
};

let items = {
  mushroom: new Items(
    "Magic shroom 'Brah'",
    16,
    "eat these and your health will grow grow grow!"
  ),
  soul: new Item("Soul Drain", 50, "Sucks out your soul and regerates life!"),
  lifePotion: new Item(
    "Life Potion",
    26,
    "Given to you from the old lady in the cave, restores your health!"
  )
};

function giveMushroom() {
  paleGuy.items.push("mushroom");
  paleGuy.health += 16;
  update();
}

function giveSoul() {
  paleGuy.items.push("soul");
  paleGuy.health += 50;
  update();
}

function giveLifePotion() {
  paleGuy.items.push("lifePotion");
  paleGuy.health += 26;
  update();
}

function slap() {
  paleGuy.health -= 1;
  update();
}

function punch() {
  paleGuy.health -= 5;
  update();
}

function kick() {
  paleGuy.health -= 10;
  update();
}

function increaseHits() {
  hits++;
}

update();

function update() {
  increaseHits();
  document.getElementById("health").innerText = paleGuy.health;
  document.getElementById("hits").innerText = hits;
  document.getElementById("progress").style.width = paleGuy.health + "%";
  document.getElementById("EnemyName").innerText = paleGuy.name;

  if (paleGuy.health <= 0) {
    document.getElementById("progress").style.width = 0;
    document.getElementById("health").innerText = 0;
  }

  if (paleGuy.health >= 100) {
    document.getElementById("progress").style.width = 100;
    document.getElementById("health").innerText = 100;
  }
  // if (health == 0) {
  //   alert: "You die";
  // } else {
  // }

  // console.log(health);

  // hits++;
  // console.log(hits);
}
