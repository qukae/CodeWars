function solution(str, ending){
  if(ending === '') {
    return true
  }
  if(str.slice(-ending.length) === ending) {
    return true
  } else {
    return false
  }
}

function solution(str, ending){
  return str.endsWith(ending);
}


console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);