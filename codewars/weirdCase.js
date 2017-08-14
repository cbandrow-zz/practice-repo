function toWeirdCase(string){
  if(string.includes(' ')){
    const multipleWords = string.split(' ')
    return multipleWords.map((word) =>{
      return word.split('').map((letter, i) =>{
        if(i % 2 === 0 || i === 0){
          return letter.toUpperCase()
        } else if (i % 2 !== 0)  {
          return letter.toLowerCase()
        }
      }).join('')
    }).join(' ')
  } else {
    return string.split('').map((letter, i) =>{
      if(i % 2 === 0 || i === 0){
        return letter.toUpperCase()
      } else if (i % 2 !== 0)  {
        return letter.toLowerCase()
      }
    }).join('')
  }
}


function toWeirdCase2(string){
  return string.split(' ').map((word) =>{
    return word.split('').map((letter, i) =>{
      if(i % 2 === 0 || i === 0){
        return letter.toUpperCase()
      } else {
        return letter
      }
    }).join('')
  }).join(' ')
}
