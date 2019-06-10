var content = document.getElementById('content');


var nim = 16;
var currentTurn = "player 1"
var p1PebblesCount = 0;
var p2PebblesCount = 0;
var p1Pebbles = [];
var p2Pebbles = [];

function reset(){
nim = 16;
currentTurn = "player 1"
p1PebblesCount = 0;
p2PebblesCount = 0;
p1Pebbles = [];
p2Pebbles = [];
content.innerHTML=renderGame(nim)
}

content.innerHTML = renderGame(nim);

function renderGame(game) {
    
    // Change this render function to use the "game" parameter
    
    return `
    <div class="container-fluid d-flex flex-column justify-content-start align-items-center">
    <h4>There are ${nim} pebbles left</h4>
    <div class="w-50 text-center pebble-container my-5" id="pebble-container">
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    <div class="pebble"></div>
    </div>
    <h4 class="mt-5">It's ${currentTurn} turn! How many pebbles will you take?</h4>
    <div>
    <select id="takeInput">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>
    <button onclick="play()" class="btn btn-primary mx-1 my-2" id="takeButton">Take</button>
    </div>
    <div>
    <div class="d-flex align-start">
    <h4 class="mx-1 ">Player 1</h4>
    <p id='p1'><b></b></p>
    </div>
    <div class="d-flex align-self-end text-center justify-content-center">
    <h4 class="mx-1">Player 2</h4>
    <p id='p2'><b></b></p>
    </div>
    </div>
    </div>
    `
}
function play(){
    x = document.getElementById('takeInput').value;
if(nim - x != 0) {
let pebblesHTML = [];
let pebble = `<div class="pebble"></div>`
let p1Pebble = `<div class="pebble mx-1 my-2" style="background-color: red;"></div> `
let p2Pebble = `<div class="pebble mx-1" style="background-color: blue;"></div> `
nim -= x;
for (var i = 0; i < nim; i++) {
    pebblesHTML.push(pebble)
}
if(currentTurn === "player 1"){ 
    currentTurn = "player 2"; 
    p1PebblesCount += x;
    for (let j = 0; j < x; j++) {
        p1Pebbles.push(p1Pebble)
    }
}else{
    currentTurn = "player 1";
    p2PebblesCount += x;
    for (let j = 0; j < x; j++) {
        p2Pebbles.push(p2Pebble)
    }
} 
content.innerHTML= renderGame(nim)
document.getElementById('pebble-container').innerHTML = pebblesHTML.join('');
document.getElementById('p1').innerHTML = p1Pebbles.join('');
document.getElementById('p2').innerHTML = p2Pebbles.join('');
document.getElementById('pebble-container').innerHTML = pebblesHTML.join('');
return 
}else{
    content.innerHTML = renderGame(nim)
    document.getElementById('p1').innerHTML = p1Pebbles.join('');
    document.getElementById('p2').innerHTML = p2Pebbles.join('');
    let reset = document.getElementById('takeButton');
    reset.setAttribute('onclick', "reset()");
    reset.classList.remove('btn-primary')
    reset.classList.add('btn-danger')
    reset.innerHTML= 'Reset'
    if (currentTurn === "player1"){
        return document.getElementById('pebble-container').innerHTML = `<h4 class="display-4">Player 2 wins the game!</h4>`
    }else{
        return document.getElementById('pebble-container').innerHTML = `<h4 class="display-3"> Player 1 wins the game!</h4>`
    }
}
}