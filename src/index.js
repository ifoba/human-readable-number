module.exports = function toReadable (number) {
  let arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//999
  let result = [];
  if (!number) result.push(arrOne[number]);
  if (number>=100){
      result.push(arrOne[Math.floor(number/100)]);
      result.push('hundred');
      number %= 100;
  }
  //99

  if (number>=20) {
      result.push(arrTen[Math.floor(number/10)-2]);
      number %= 10;
            
  }
  //9

  if (number>=0 && !number%10==0) {
      result.push(arrOne[number]);
  }

  

  return result.join(' ');

}
