function getLastChooseOption() {
    const chooseList = JSON.parse(localStorage.getItem('chooseList'));


    const chooses = Object.values(chooseList);
    const  reverse = chooses.reverse();
    for(let i = 0; i < chooses.length;i++)
    {   
        if(reverse[i] !== null)
        {
            return reverse[i];
            
        }

    }
    return null;
  }


  

  export default getLastChooseOption;