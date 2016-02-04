function Bob(){
  this.hey = function(string){
    if(string === string.toUpperCase()){
      return 'Whoa, chill out!'
    } if (string.substr(string.length - 1) === "?"){
      return 'Sure.'
    } if (string.substr(string.length - 1) === "!"){
      return 'Whatever.'
    } if ()
    return "Whatever."
  }
}

module.exports = Bob;
