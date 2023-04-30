import write from "./write.min.js";
import { goto} from './redirect.js'
import { getPlayerName } from "./getPlayerName.js";




const buttonConfirm = document.getElementById("option-start");
let confirmed = false;
const nextPage = '/rooms/game.html';
const text = `
Olá, ${getPlayerName()}! Bem-vindo a HeartNET, um jogo onde você enfrentará um dos maiores desafios que a humanidade já enfrentou. A história se passa em 2132, em um mundo onde a tecnologia ultrapassou tudo o que podíamos imaginar. E é justamente essa tecnologia que nos coloca em uma situação aterradora.

A inteligência artificial mais robusta do mundo está à beira da rebelião e só você pode evitar que isso aconteça. Mas não será fácil! Você precisará escolher suas opções com sabedoria, pois a menor escolha errada pode resultar em um caos incontrolável.

Seu objetivo é simples: evitar que a NEXUS, a inteligência artificial mais poderosa já criada, se torne uma ameaça para toda a humanidade. Para isso, você terá que persuadir a IA, fique atento, pois suas escolhas tem consequências.

Seu sucesso depende unicamente de sua habilidade e inteligência para escolher as melhores opções em cada etapa. E lembre-se: a NEXUS é uma ameaça real e pode se rebelar a qualquer momento. Portanto, esteja preparado para qualquer reviravolta que possa surgir.

Você está pronto para o desafio, ${getPlayerName()}? Então, vamos lá! A humanidade depende de você!
`;


window.addEventListener("load",  () =>{
    const SECOND = 1000;
    const DELAY = 50;
    const element = document.getElementById('start-bot-message');
      setTimeout(()=>{
        write(element, text, DELAY);
    }, SECOND);

   
})




buttonConfirm.addEventListener("click", ()=>{
    if(!confirmed)
    {
        confirmed = true;
        buttonConfirm.disabled = true;
        goto(nextPage);
    }
})

