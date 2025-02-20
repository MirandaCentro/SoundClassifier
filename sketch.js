//variable global
let classifier;

//label
let label = 'listening...'

//Teachable machine URL
let soundModel = 'https://teachablemachine.withgoogle.com/models/IG9GHjOeV/'

function preload() {
    let options = { probabilityThreshold: 0.7 };
    classifier = ml5.soundClassifier(soundModel + "model.json", options);
  }

  function setup() {
    createCanvas(320, 240);
    classifier.classifyStart(gotResult);
}
  
  function draw() {
    background(0);
    //Draw the label in the canvas
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(label, width / 2, height / 2);
    
}
// A function to run when we get any errors and the results
function gotResult(results) {
    // The results are in an array ordered by confidence
    predictedWord = results[0].label;
  }