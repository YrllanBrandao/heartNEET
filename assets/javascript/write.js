 async function write(element, text, delay) {
    
    const splittedText = text.split("");
    
    for(let i = 0; i < splittedText.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay)); // aguarda o atraso definido pelo parâmetro `delay`
      element.innerHTML += splittedText[i];
    }
    
    return true; // retorna somente após a execução de todos os `setTimeouts`
  }
  

  export default write;