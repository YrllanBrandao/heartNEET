import option from "./option.js";
import write from "./write.js";
const chatArea = document.querySelector(".chat-area");



function messageBot(dialogue) {
  const DELAY = 50;
  const profilePath = "/assets/image/bot.png";
  const AreaBotMessage = document.createElement("div");
  const mainBotMessage = document.createElement("p");
  const img = document.createElement("img");

  img.src = profilePath;
  mainBotMessage.classList.add("bot-message");
  img.classList.add("bot-profile");
  AreaBotMessage.classList.add("area-bot-message");
  AreaBotMessage.appendChild(img);
  AreaBotMessage.appendChild(mainBotMessage);
  chatArea.appendChild(AreaBotMessage);

  option.renderOptions(dialogue);
  option.showOptions();
  option.getSelectedOption();

  const elements = document.querySelectorAll(".bot-message");
  const element = elements[elements.length - 1];

  write(element, dialogue.aiText, DELAY);
}

function messagePlayer(Text) {
  const profilePath = "/assets/image/player.png";
  const AreaPlayerMessage = document.createElement("div");
  const mainPlayerMessage = document.createElement("p");
  const img = document.createElement("img");
  img.src = profilePath;
  mainPlayerMessage.classList.add("main-player-message");
  img.classList.add("player-profile");
  mainPlayerMessage.innerHTML = `${Text}`;

  AreaPlayerMessage.classList.add("area-player-message");
  AreaPlayerMessage.appendChild(img);
  AreaPlayerMessage.appendChild(mainPlayerMessage);
  chatArea.appendChild(AreaPlayerMessage);
}

export default Object.freeze({
  messageBot,
  messagePlayer,
});
