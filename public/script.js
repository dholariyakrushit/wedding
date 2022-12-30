// playlist = {
//   'song_1': 'song/005.mp3',
// }

var play = document.getElementById("play");
var music = document.querySelector("audio");
const img = document.getElementById("123");
var extra = document.getElementById("extra");
var playPaushBtn = document.getElementById("playPaushBtn");

var extraSecond = document.getElementById("extraSecond");
var playPaushBtnSecond = document.getElementById("playPaushBtnSecond");
var playSecond = document.getElementById("playSecond");


img.classList.add("anime");
extra.classList.add("pulse")
extraSecond.classList.add("pulse")


play.classList.replace('bi-pause-circle', 'bi-play-circle');
playSecond.classList.replace('bi-pause-circle', 'bi-play-circle');



//for pause to play btn
let isplaying = false;
const pausemusic = () => {
  isplaying = false;
  music.pause();
  play.classList.replace('bi-pause-circle', 'bi-play-circle');
  playSecond.classList.replace('bi-pause-circle', 'bi-play-circle');
  img.classList.remove("anime");
  extra.classList.remove("pulse");
  extraSecond.classList.remove("pulse");
};

//for play to payse btn
const playmusic = () => {
  isplaying = true;
  music.play();
  play.classList.replace('bi-play-circle', 'bi-pause-circle');
  playSecond.classList.replace('bi-play-circle', 'bi-pause-circle');
  img.classList.add("anime");
  extra.classList.add("pulse");
  extraSecond.classList.add("pulse");
};

playPaushBtn.addEventListener('click', () => {
  if (isplaying == true) {
    pausemusic();
  }
  else {
    playmusic();
  }
}
);

playPaushBtnSecond.addEventListener('click', () => {
  if (isplaying == true) {
    pausemusic();
  }
  else {
    playmusic();
  }
}
);

function Check() {
  music.onplaying = function () {
    play.classList.replace('bi-play-circle', 'bi-pause-circle');
    playSecond.classList.replace('bi-play-circle', 'bi-pause-circle');
    isplaying = true
  }
  music.onpause = function () {
    isplaying = false;
    play.classList.replace('bi-pause-circle', 'bi-play-circle');
    playSecond.classList.replace('bi-pause-circle', 'bi-play-circle');

  }
}


Check();

// window.onload = function () {
//   playmusic();
// }

// window.scroll = function () {
//   playmusic();
// }


window.onpause = function () {
  pausemusic();
}

window.onclose = function () {
  pausemusic();
}



$(document).ready(function () {
  $('.slick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 50,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });
});

$(document).ready(function () {
  $('.slick2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });
});


// PROGRESSBAR

let processScroll = () => {
  let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
    scrollBottom = (docElem["scrollHeight"] || docBody["scrollHeight"]) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 + "%";

  document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);
}


document.addEventListener("scroll", processScroll);
