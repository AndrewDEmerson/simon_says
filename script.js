//Global Consts
const nextClueWaitTime = 1000; //how long to wait before playback of the next clue sequence

//Global Variable
var pattern = [5, 6, 3, 4, 5, 6, 3, 2];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;
var lives = 3;
//game speed contol
var clueHoldTime = 100; //How long to hold clues light/sound on
var cluePauseTime = 50; //how long to pause between clues
//sound control
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 & 1.0

var ratio0 = 4.0
var ratio1 = 5.0
var ratio2 = 6.0

function generateCode(){
  for (let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 6)+1;
    console.log("added code: " + pattern[i]);
  }
}

function startGame() {
  setMajorChord();
  //init game variables
  progress = 0;
  gamePlaying = true;
  lives = 3;
  clueHoldTime = 650;
  cluePauseTime = 200;
  //swap start & stop buttons
  generateCode();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("health").innerHTML="Lives: " + lives;
  flashLights(playClueSequence);
  //playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  //swap start & stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function flashLights(callback) {
  var length = 150;
  for (let n = 0; n < 6; n+=2) {
    for (let l = 1; l <= 6; l++) {
      setTimeout(lightButton, length * n, l); // set a timeout to play that clue
      setTimeout(clearButton, length * (n+1), l); // set a timeout to play that clue
    }
  }
  setTimeout(callback, length * 8); // set a timeout to play that clue
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  setMinorChord();
  setTimeout(playTone, 0, 3, 700);
  setTimeout(playTone, 900, 2, 300);
  setTimeout(playTone, 1400, 1, 500);
  setTimeout(alert, 2000, "Game Over, You Lose");  
}

function winGame() {
  stopGame();
  setMajorChord();
  setTimeout(playTone, 0, 5, 200);
  setTimeout(playTone, 600, 4, 200);
  setMinorChord();
  setTimeout(playTone, 1100, 5, 200);
  setTimeout(playTone, 1400, 5, 200);
  setMajorChord();
  setTimeout(playTone, 2000, 6, 400);
  setTimeout(playTone, 2500, 5, 300);
  setTimeout(alert, 2900, "Congrats! You Win!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn != pattern[guessCounter]) {
    lives--;
    document.getElementById("health").innerHTML="Lives: " + lives;
    if (lives <= 0){
      loseGame();
    }else{
      flashLights(playClueSequence);
    }
  } else {
    if (guessCounter == progress) {
      if (progress == 7) {
        document.getElementById("progress").innerHTML="Progress: <B>Complete!</B>";
        flashLights(winGame);
      } else {
        progress++;
        document.getElementById("progress").innerHTML="Progress: " + progress + "/8";
        clueHoldTime *= 0.8;
        cluePauseTime *= 0.9;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}

function setMajorChord(){
  ratio0 = 4.0
  ratio1 = 5.0
  ratio2 = 6.0
}

function setMinorChord(){
  ratio0 = 10.0
  ratio1 = 12.0
  ratio2 = 15.0
}


// Sound Synthesis Functions
const freqMap = {
  1: 440,    //A4
  2: 493.88, //B4
  3: 523.25, //C4
  4: 587.33, //D4
  5: 659.25, //E4
  6: 698.46  //F4
};

function playTone(btn, len) {
  // Generate a chord, based on the root chord.
    o1.frequency.value = freqMap[btn];
    o2.frequency.value = freqMap[btn]*(ratio1/ratio0);
    o3.frequency.value = freqMap[btn]*(ratio2/ratio0);
    g1.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    g2.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    g3.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    // Generate a chord, based on the root chord.
    o1.frequency.value = freqMap[btn];
    o2.frequency.value = freqMap[btn]*(ratio1/ratio0);
    o3.frequency.value = freqMap[btn]*(ratio2/ratio0);
    g1.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    g2.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    g3.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  // Stop Playing the chord
  g1.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  g2.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  g3.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o1 = context.createOscillator();
var o2 = context.createOscillator();
var o3 = context.createOscillator();
var g1 = context.createGain();
var g2 = context.createGain();
var g3 = context.createGain();
g1.connect(context.destination);
g1.gain.setValueAtTime(0, context.currentTime);
g2.connect(context.destination);
g2.gain.setValueAtTime(0, context.currentTime);
g3.connect(context.destination);
g3.gain.setValueAtTime(0, context.currentTime);
o1.connect(g1);
o2.connect(g2);
o3.connect(g3);
o1.start(0);
o2.start(0);
o3.start(0);
