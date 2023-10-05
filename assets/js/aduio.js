const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const music = document.getElementById('music');
const musicList = document.getElementsByTagName('li');
const progressBar = document.getElementById('progress-bar');
let currentTrack = 0;
let currentList;

let tracks = [
      {
                "track": 1,
             
                "url": "001.mp3"
            },
            {
              "track": 2,
             
                "url": "001.mp3"
            },
            {
              "track": 3,
         
                "url": "001.mp3"             
            }
          ];
 
function init() {
  if (currentTrack === 0) {
    music.src = tracks[0].url;
    music.load();
  }

  for(let i=0; i<tracks.length; i++){
    $('ul.menu').append(`<li id="${i}"><div class="wrapper"><div>${tracks[i].track}</div><div>${tracks[i].name}</div><div>${tracks[i].artist}</div><div>${tracks[i].duration}</div></div></li><hr/>`);
  }

  for(let musicIndex=0; musicIndex<musicList.length; musicIndex++){
    musicList[musicIndex].addEventListener('click', switchMusic, false);
  }
}

function switchMusic(e) {

  if(currentList !== undefined) {
    removePlayedBackground();
    music.pause();
  } 
  currentTrack = this.id;
  music.src = tracks[currentTrack].url;
  music.load();
  play();

}

function addChoosedBackground() {
  currentList = document.getElementById(currentTrack);
  currentList.classList.add("song-play-now");


}

function removePlayedBackground() {
  currentList.classList.remove("song-play-now");

}

function play() {
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  
  music.play();
  musicIsPlaying = true;
  addChoosedBackground();
  document.getElementById('end-time').innerHTML = tracks[currentTrack].duration;
}

function pause() {
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");

  musicIsPlaying = false;
  music.pause();
}


function prePlay() {
  removePlayedBackground();
  music.pause();

  if (currentTrack > 0){
    currentTrack --;

  } else {
    currentTrack = tracks.length-1;
  }
  
  music.src = tracks[currentTrack].url;
  music.load();
  play();

}

function nextPlay() {
  removePlayedBackground();
  music.pause();
  
  if (currentTrack < tracks.length-1){
    currentTrack ++;

  } else {
    currentTrack = 0;
  }

  music.src = tracks[currentTrack].url;
  music.load();
  play();

}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time;
}

function formatTime() {
  let timeline = document.getElementById('start-time');
    let s = parseInt(music.currentTime % 60);
    let m = parseInt((music.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}

function updateProgress() {
  let current = music.currentTime;
  let percent = (current / music.duration) * 100;
  progressBar.setAttribute('value', percent);

}

playBtn.addEventListener('click', play, false);
pauseBtn.addEventListener('click', pause, false);
preBtn.addEventListener('click', prePlay, false);
nextBtn.addEventListener('click', nextPlay, false);
music.addEventListener('ended', nextPlay, false);

// 歌曲已播放時間
music.addEventListener("timeupdate", formatTime, false);
music.addEventListener("timeupdate", updateProgress, false);



init();