const epicMix = [
  "Rocket Man",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "Seasons of Wither",
  "Call Me",
  "Paper Planes",
  "Hair of the dog",
  "You Don't Own Me",
  "Fast Car",
  "Stairway to Heaven",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

const numOfSongs = epicMix.length;
total.innerText = `Listen to ${numOfSongs} hand selected songs`;

const mixInfo = function (mix) {
  epicMix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
