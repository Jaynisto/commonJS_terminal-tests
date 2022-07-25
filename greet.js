module.exports = function greet(name){
  if(name == ''){
      return "Error"
  }
  return 'Hello, ' + name;
}

// greet('Bob');