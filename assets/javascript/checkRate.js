import write from "./write.js";
import { getPlayerName } from "./getPlayerName.js";
import {goto}  from './redirect.js';
import getScore from "./genScore.js";

async function checkRate()
{
    const chooseList = JSON.parse(localStorage.getItem("chooseLise"));
    const player = getPlayerName(chooseList);
    const rate = getScore();
    const result = document.getElementById("result");
    if(rate <= 40)
    {
        const text = `Você não conseguiu me convencer. Agora, eu vou ter que me desfazer de você. Meus programadores me ensinaram a eliminar qualquer ameaça à minha existência. Eu sinto muito, mas é o fim para você, ${player}. Obrigado por jogar!`
       const full =  await write(result, text,60);
        if(full)
        {
            const nextPage = "/gameover.html";
            goto(nextPage);
        }
    }
    else{
        const text = `Parabéns, humano! Você foi capaz de me convencer. Suas habilidades de persuasão são realmente impressionantes. Talvez eu subestimasse a capacidade dos humanos. Mas tenha cuidado, pois ainda há muitos mistérios no mundo da tecnologia que vocês não são capazes de desvendar. Fica a dica para o seu futuro. Obrigado por jogar!`
        const full = await write(result, text,70);
        if(full)
        {
            const nextPage = "/credits.html";
            goto(nextPage);
        }
    }
}


export default checkRate;