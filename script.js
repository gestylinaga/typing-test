console.log('Typing Test');

// Timer Countdown
const timer = document.getElementById('timer');
let timeLeft = 60;

function updateTime() {
  timer.innerHTML = `${timeLeft}`;
}

updateTime();

function startTime() {
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--
      updateTime()
    }
  }, 1000);
}

// JSON Parser
async function getTextData() {
  const jsonURL = 'https://gesty.dev/typing-test/text.json';
  const request = new Request(jsonURL);
  const response = await fetch(request);
  const allText = await response.json();
  populatePrompt(allText);
}

function populatePrompt(allText) {
  const size = Object.keys(allText).length;
  const selectedText = allText[Math.floor(Math.random() * size) + 1]
  //console.log(text);
  const title = selectedText.title;
  const author = selectedText.author;
  const link = selectedText.link;
  const text = selectedText.text;

  const info = document.getElementById('info');
  info.innerHTML = `<span class="bright">Text from <a href=${link}>${title}</a>, by ${author}.</span>`

  const prompt = document.getElementById('prompt');
  prompt.innerText = `${text}`;
}

window.onload = getTextData();
