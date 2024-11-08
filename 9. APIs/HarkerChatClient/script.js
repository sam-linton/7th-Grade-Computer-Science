const url = 'https://harkerchat.samuellinton.repl.co/';

async function sendMessage() {
  let messageInput = document.getElementById('message-input');
  let message = messageInput.value;
  messageInput.value = '';

  let fullurl = url + 'send/' + message;
  console.log(fullurl);
  let res = await fetch(fullurl);
  console.log(res);
}

async function getMessages() {
  let res = await fetch(url);
  let messages = await res.json();

  let messagesDiv = document.getElementById('messages-div');
  messagesDiv.innerHTML = '';
    for (let i = 0; i < messages.length; i++) {
      messagesDiv.innerHTML += '<p>'+ messages[i] + '</p';
    }
}

setInterval(getMessages, 1000);