function digital_root(n) {
  if(n <= 9){
    return n
  }
  let nums = n.toString().split('').reduce((acc, num) =>{
    return acc += parseInt(num)
  }, 0)
  return digital_root(nums)
}
