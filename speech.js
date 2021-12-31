var x = 0;
var y = 0;

screenWidth = 0;
screenHeight = 0;

draw_apple = "";
apple = "";

speak_data = "";

to_number = 0;

function preload() {
    apple = loadImage("apple.png");
}

var speechRecognition = window.webkitSpeechRecognition;
recognition = new speechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Your system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised: " + content;
}

to_number = Number(content);
if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Starting to draw apple";
    draw_apple = "set";
}
else {
    document.getElementById("status").innerHTML = "Speech is not recognised";
}

function setup() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas = createCanvas(screenWidth, screenHeight - 150);
    canvas.position(0, 150);
}

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " apples drawn";
        speak_data = to_number + "apples drawn";
        speak();
        draw_apple = "";
    }
}

function speak() {
    var synth = window.speechSynthesis;
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak();
    speak_data = "";
}































