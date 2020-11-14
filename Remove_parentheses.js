
function removeParentheses(s){
  let indexOfParentheses = []
  let cut = []
  let count = 0
    for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      indexOfParentheses.push(i)
      count += 1
    }
    if(s[i] === ')') {
      indexOfParentheses.push(i)
      count -= 1
      if(count === 0) {
        const start = indexOfParentheses[0]
        const end = indexOfParentheses[indexOfParentheses.length-1]
        cut =[...cut, s.slice(start, end+1)]
        indexOfParentheses = []
      }
    }
  }
  for (let i = 0; i < cut.length; i++) {
    s = s.replace(cut[i], '')
  }
  return s
}

function removeParentheses(s){
  let result = "";
  let count = 0;
  for (let letter of s){
    if (letter == "(") count += 1;
    if (count == 0) result += letter;
    if (letter == ")") count -= 1
  }
  return result
}



console.log(removeParentheses("example(unwanted thing)example"), "exampleexample");
console.log(removeParentheses("a(b(c))"), "a");
console.log(removeParentheses("example (unwanted thing) example"), "example  example");
console.log(removeParentheses("(first group) (second group) (third group)"), "  ");
