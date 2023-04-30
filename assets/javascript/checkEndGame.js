import {goto} from "./redirect.js"
function checkEndGame()
{
    const chooseList = JSON.parse(localStorage.getItem("chooseList"));
    
    const chooses = Object.values(chooseList);

    const end = chooses.every(choose => choose !== null);

    if(end)
    {
        const nextPage = "/rooms/end.html";

        goto(nextPage);
        return;
    }
   return false;
}

export default checkEndGame;