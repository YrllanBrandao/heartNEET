import Game from './game.js';
import checkRate from './checkRate.js';
class Options{
    constructor()
    {
        this.options = document.querySelectorAll(".btn-option");
        this.areaOptions = document.querySelector(".area-options");
    }
    _setStage()
    {
      
      const stage = JSON.parse(localStorage.getItem("stage"));
      if(stage < 5)
      {
    const newStage =  stage+1;
      localStorage.setItem("stage", newStage);
    } 

    // verificando se o jogo encerrou
    const SECOND =  1000;
    const currentStage = JSON.parse(localStorage.getItem("stage"));
    if(currentStage >= 5)
    {
    const overlay = document.querySelector(".overlay-load");
    overlay.classList.add("active")
    setTimeout(()=>{
      checkRate();
    }, SECOND)
    }
    }
    getStage()
    {
      const stage = JSON.parse(localStorage.getItem("stage"));
      return stage;
    }
    _enableOptions() {
      const elements = document.querySelectorAll(".btn-option");
    
      elements.forEach((element) => {
        element.disabled = false;
        element.classList.remove("disabled");
      });
    }
    
    _saveChoose(optionId) {
      const chooseList = JSON.parse(localStorage.getItem("chooseList"));
      const listKeys = Object.keys(chooseList);
      const listValues = Object.values(chooseList);
    
      let foundNullIndex = -1;
      for (let i = 0; i < listValues.length; i++) {
        if (listValues[i] === null) {
          foundNullIndex = i;
          break;
        }
      }
    
      if (foundNullIndex >= 0) {
        chooseList[listKeys[foundNullIndex]] = optionId;
        const newList = JSON.stringify(chooseList);
        localStorage.setItem("chooseList", newList);
        console.table(chooseList);
      }
    }
    
    
    showOptions()
    {
        this.areaOptions.classList.add("active");
    }
    hideOptions()
    {
        this.areaOptions.classList.remove("active");
    }
    renderOptions(dialogue)
    {
        const option_1 = document.getElementById("option-1");
        const option_2 = document.getElementById("option-2");
        option_1.innerHTML = dialogue.option1;
        option_2.innerHTML = dialogue.option2;
    }
    getSelectedOption() {
      this.options.forEach((element) => {
        element.addEventListener("click", () => {
          if (!element.classList.contains("disabled")) { // verifica se o botão já foi clicado
            element.classList.add("disabled"); // adiciona a classe "disabled" ao botão
            this.hideOptions();
            this._saveChoose(element.id);
            this._setStage();
            Game.renderTalk();
          }
        });

        // ativa os botoes novamente

        setTimeout(() => {
            this._enableOptions();
        }, 2000);

        // verificando se o jogo já acabou
        
      });
      
    }
    
    
}


export default new Options;