let recog = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recog.lang = 'en-us';
recog.interimResults = false;
recog.maxAlternatives = 1;

function askForName() {
    let utterance = new SpeechSynthesisUtterance('What is your name');
    utterance.onend = listenForAnswer;
    speechSynthesis.speak(utterance);
}

function listenForAnswer() {
    recog.onspeechend = recog.stop;
    recog.onresult = affirm;
    recog.start();
}

function affirm(event) {
    let result = event.results[0][0].transcript;
    let words = result.split(' ');
    let name = words[words.length-1];

    let affirmation = 'You are amazing, ' + name;
    let utterance = new SpeechSynthesisUtterance(affirmation);
    speechSynthesis.speak(utterance);
}

askForName();

