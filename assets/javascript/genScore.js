import rates from "./rateCheck.js";

function getScore() {
  const chooseList = JSON.parse(localStorage.getItem("chooseList"));

  for (let i = 0; i < rates.length; i++) {
    const rateOptions = rates[i];

    for (const [key, value] of Object.entries(rateOptions)) {
      if (key.startsWith("chooses")) {
        const options = value[0];
        const rate = value[1].rate;

        if (
          options.choose1 === chooseList.choose1 &&
          options.choose2 === chooseList.choose2 &&
          options.choose3 === chooseList.choose3 &&
          options.choose4 === chooseList.choose4
        ) {
          return rate;
        }
      }
    }
  }

  return null;
}


export default getScore;