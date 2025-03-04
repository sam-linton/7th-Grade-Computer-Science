//create a synth and connect it to the main output (your speakers)
const notes = ["C", "D", "E", "F", "G", "A", "B"];
let recording = false;
let recordedNotes = [];

const synth = new Tone.FMSynth().toDestination();
//const synth = new Tone.PolySynth(Tone.NoiseSynth).toDestination();

// const synth = new Tone.AMSynth();
// const delay = new Tone.FeedbackDelay("8n", 0.5);
// synth.connect(delay);
// delay.toDestination();

function keyDown(event) {
    const key = event.key.toUpperCase();
    const index = notes.indexOf(key);
    if (index !== -1) {
        playNote(index);
    }
}

function play() {
    //play a middle 'C' for the duration of an 8th note
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.25);
}

function playNote(i) {
    console.log(i);
    synth.triggerAttackRelease(notes[i] + "4", "8n");
    if (recording) {
        recordedNotes.push(notes[i]);
    }
    console.log(recordedNotes);
}

function startRecording() {
    recording = true;
    recordedNotes = [];
}

function stopRecording() {
    recording = false;
    console.log(recordedNotes);
}

function playRecording() {      
    const time = Tone.now();
    console.log(recordedNotes);
    for (let i = 0; i < recordedNotes.length; i++) {
        synth.triggerAttackRelease(recordedNotes[i] + "4", "8n", time + i * 0.5);
    }
}

function createKeyboard() {
    const keyboard = document.getElementById("keyboard");
    
    for (let i = 0; i < notes.length; i++) {
        const keyButtonHtml = '<button onclick="playNote('+
            i+')">'+notes[i]+'</button>';
        keyboard.innerHTML += keyButtonHtml;
    }
    console.log(keyboard);
}

createKeyboard();