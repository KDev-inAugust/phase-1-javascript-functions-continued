// code your solution here

const mondayWork = function (activity='go to the office') {
    return(`This Monday, I will ${activity}.`);
  };

const saturdayFun = function (activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}

const wrapAdjective = function(flair="*"){
    return function(param='special'){
        return `You are ${flair}${param}${flair}!`
    }
}
