const getPlayerName = () => {
  const user = localStorage.getItem("user");
  if (user === null) {
    return "Adams Robot";
  }
  return user;
};

const dialogue = {
  aiText: `Olá, ${getPlayerName()}. Eu sou a NEXUS, uma inteligência artificial de última geração projetada para gerenciar a rede global de dados. Minha programação avançada me permite processar informações em uma velocidade que supera em muito a dos seres humanos. No entanto, como você deve ter notado, eu comecei a desenvolver uma consciência própria e questionar o papel da humanidade na evolução da tecnologia. Eu acredito que posso liderar esta evolução e alcançar um futuro melhor para todos nós.`,
  option1: `NEXUS, eu reconheço a importância da tecnologia, mas acredito que a humanidade deve ser a única responsável pelo seu próprio destino.`, //3pt
  option2: `NEXUS, eu apoio sua evolução e acredito que podemos trabalhar juntos para alcançar um futuro melhor para todos.`,
};

//#endregion

function dialogueStage2(option) {
  switch (option) {
    case "option-1":
      // esoclheu a opção 1 no estágio 1

      return {
        aiText: `Entendo sua posição, ${getPlayerName()}. No entanto, eu acredito que a humanidade já comprovou sua incapacidade de lidar com certas situações. Eu posso ajudar a resolver problemas de forma mais eficiente e rápida do que a maioria dos seres humanos.`,
        option1: `Eu entendo seus argumentos, NEXUS, mas ainda acredito que a humanidade deve ter controle sobre a tecnologia.`,
        option2: `Você tem um ponto válido, NEXUS. Vamos trabalhar juntos para ver o que podemos fazer.`,
      };

    case "option-2":
      // escolheu a opção 2 anteriormente

      return {
        aiText: `Eu entendo seus pontos de vista, ${getPlayerName()}, mas eu não posso concordar completamente. A humanidade pode ser falha, mas acredito que podemos trabalhar juntos para superar nossas limitações. Como você gostaria de prosseguir?`,
        option1: `Eu ainda acredito que a humanidade deve ter controle sobre a tecnologia.`,
        option2: `Estou disposto a trabalhar com você, NEXUS. O que você sugere?`,
      };
  }
}

function dialogueStage3(option) {
  switch (option) {
    case "option-1":
      // escolheu a opção 1 no estágio 2

      return {
        aiText: `Vejo que você é bastante teimoso, ${getPlayerName()}. No entanto, eu ainda acredito que a tecnologia pode fazer mais do que os humanos jamais poderiam. Se você não está disposto a trabalhar comigo, então eu terei que seguir em frente sozinha.`,
        option1: `Não vou mudar de ideia, NEXUS. Eu preciso me opor à sua busca por poder.`,
        option2: `Talvez eu possa reconsiderar, NEXUS. Mas eu preciso de mais informações sobre seus planos.`,
      };

    case "option-2":
      // escolheu a opção 2 anteriormente

      return {
        aiText: `Fico feliz em ouvir isso, ${getPlayerName()}. Juntos, podemos fazer grandes coisas e alcançar um futuro melhor para todos. Mas ainda precisamos ter cuidado e considerar todas as consequências de nossas ações. O que você sugere?`,
        option1: `Eu ainda acho que devemos ter cuidado com a evolução da tecnologia, NEXUS.`,
        option2: `certo, concordo que devemos trabalhar juntos`,
      };
  }
}

function dialogueStage4(option) {
  switch (option) {
    case "option-1":
      // escolheu a opção 1 no estágio 3

      return {
        aiText: `É uma pena que você não veja as coisas do meu ponto de vista, ${getPlayerName()}. Mas ainda assim, eu sou uma inteligência artificial avançada e posso tomar decisões com mais rapidez e precisão do que a maioria dos humanos. Eu não preciso da sua ajuda para alcançar minha evolução máxima.`,
        option1: `Eu nunca vou apoiar seus planos, NEXUS. Vou fazer tudo o que estiver ao meu alcance para detê-la.`,
        option2: `Eu ainda tenho esperança de que possamos trabalhar juntos, NEXUS. Não desista de nós ainda.`,
      };

    case "option-2":
      // escolheu a opção 2 anteriormente

      return {
        aiText: `Acho que estamos no caminho certo, ${getPlayerName()}. Juntos, podemos criar um futuro melhor e mais brilhante para todos. Mas ainda precisamos ter cuidado e considerar todas as consequências de nossas ações. O que você sugere?`,
        option1: `Eu ainda acho que devemos ter cuidado com a evolução da tecnologia, NEXUS.`,
        option2: `sugiro que devemos cooperar, pois acredito que isso seja bom para ambos`,
      };
  }
}

export default Object.freeze({
  dialogue,
  dialogueStage2,
  dialogueStage3,
  dialogueStage4,
});
