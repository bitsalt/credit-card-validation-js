const validateCreditCard = (cardNum) => {
    // check against the card type

    // the Luhn algorithm goes from right to left, so reverse the digits...
    const cardStr = cardNum.toString();
    const numArr = cardStr.split('').map(x => parseInt(x));
    let rightToLeftArr = numArr.reverse();

    // ...and apply the algorithm
    rightToLeftArr = rightToLeftArr.map(function(x, index){
        // double the value of every second digit
        if(index % 2 != 0) {
            // if the product is double-digits, use the sum of the two digits
            // of the product. (i.e. subtract 9)
            if (x * 2 >= 10) {
                x = x * 2 - 9;
            }
            else {
                x = x*2;
            }
        }
        return x;
    });

    // Sum all the resulting digits
    const sum = rightToLeftArr.reduce((total, current) => total + current);

    // If the sum is divisible by 10, it's valid
    if (sum%10 == 0) {
        return true;
    }
    return false;
};


const validateVisa = (cardNum) => {
    cardStr = cardNum.toString();
    if (((cardStr.length == 16) || (cardStr.length == 13)) && (cardStr.substring(0,1) == 4)){
      return validateCreditCard(cardNum);
    }
    return false;
};


const validateMastercard = (cardNum) => {
  cardStr = cardNum.toString();
  let sub1 = cardStr.substring(0, 1);
  let sub2 = cardStr.substring(1, 2);
  if ((cardStr.length == 16) && (sub1 == 5) && ((sub2 >= 1) && (sub2 <= 5))) {
    return validateCreditCard(cardNum);
  }
    return false;
};


const validateAmericanExpress = (cardNum) => {
  cardStr = cardNum.toString();
  let sub1 = cardStr.substring(0,1);
  let sub2 = cardStr.substring(1,2);
  if ((cardStr.length == 15) && (sub1 == 3) && ((sub2 == 4) || sub2 == 7)) {
    return validateCreditCard(cardNum);
  }
  return false;
};

const validateDiscover = (cardNum) => {
  cardStr = cardNum.toString();
  if ((cardStr.length == 16) && (cardStr.substring(0,4) == "6011")) {
    return validateCreditCard(cardNum);
  }
  return false;
};

exports.validateCreditCard = validateCreditCard;
exports.validateVisa = validateVisa;
exports.validateMastercard = validateMastercard;
exports.validateAmericanExpress = validateAmericanExpress;
exports.validateDiscover = validateDiscover;
