module.exports = function check(str, bracketsConfig) {
  // your solution
  let temp;
  let flag = false;
  let flagEqual = true;
  let bracketsConfigLength = bracketsConfig.length;
  let strLength = str.length;
  let ind = strLength;
  let resultBrackets = [];
  let resultEqualBrackets = [];
  
  if(!strLength % 2) {
    return false;
  }

  let openBrackets =  bracketsConfig.map((el) => { return el[0]; })
  let closeBrackets = bracketsConfig.map((el) => { return el[1]; })
  let equalBrackets = bracketsConfig.filter((el, ind) => { return el[0] === el[1]});


  while(ind > 0) {
    temp = str[strLength - ind]

    if(closeBrackets.indexOf(temp) === openBrackets.indexOf(temp)) {
        equalBrackets = equalBrackets.map((el, ind) => {
            if(el[0] == closeBrackets[closeBrackets.indexOf(temp)] && resultBrackets.length !== 0) {
                el.push(temp)
            }
            return el;
        })
    } else if(closeBrackets.indexOf(temp) > -1) {
      if(resultBrackets.length === 0 || resultBrackets.pop() !== openBrackets[closeBrackets.indexOf(temp)]) {
          return false;
      }  
    } else {
        resultBrackets.push(temp)
    }
    ind--;
  }
  console.log('opBrackets ', openBrackets)
  console.log('closingBrackets ', closeBrackets)
  console.log('equal brackets ', equalBrackets)

  flag = resultBrackets.length === 0;
  equalBrackets.forEach((el,ind) => { flagEqual = el.length % 2 !== 1})
  return flag && flagEqual;

}
