import Message from "./message.js";
import option from "./option.js";
import dialogue from "./dialogue.js";
import getLastChooseOption from "./getLastOption.js";
import checkRate from "./checkRate.js";

function createStage() {
  const exist = localStorage.getItem("stage");

  if (exist === null) {
    const STAGE = 1;
    localStorage.setItem("stage", STAGE);
  }
}
function createChooseList() {
  const exist = localStorage.getItem("chooseList");

  if (exist === null) {
    const chooseList = JSON.stringify({
      choose1: null,
      choose2: null,
      choose3: null,
      choose4: null,
    });
    localStorage.setItem("chooseList", chooseList);
  }
}
function createRate()
{
    const exists = localStorage.getItem("rate");

    if(exists === null)
    {
        localStorage.setItem("rate", 0);
    }
}
createRate()
createStage();
createChooseList();

async function renderTalk() {
    const stage = await option.getStage();
    const lastChoose = getLastChooseOption();

    switch (stage) {
      case 1:
        
        Message.messageBot(dialogue.dialogue);
        break;
      case 2:
        Message.messageBot(dialogue.dialogueStage2(lastChoose));
        break;
      case 3:
    
        Message.messageBot(dialogue.dialogueStage3(lastChoose));
     
        break;
      case 4:
        Message.messageBot(dialogue.dialogueStage4(lastChoose));
        break;
      default:
        break;
    }
  }
  


renderTalk();



export default Object.freeze({
  renderTalk,
});
