// I = 1 ,V=5 ,X =10 , L= 50, C = 100, D = 500, M = 1000

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let Rom = num;
  let result = "";
  if (num >= 1000) {
    let tho = num / 1000;
    result += "M".repeat(tho);
    Rom = num % 1000;
    console.log(Rom);
  }
  if (Rom >= 500) {
    if (Math.floor(Rom / 100) === 9) {
      result += "CM";
      Rom = Rom - 900;
    } else {
      result += "D";
      Rom = Rom - 500;
    }
  }
  if (Rom >= 100) {
    if (Math.floor(Rom / 100) === 4) {
      result += "CD";
      Rom = Rom - 400;
    } else {
      result += "C".repeat(Rom / 100);
      Rom = Rom % 100;
    }
  }
  if (Rom >= 50) {
    if (Math.floor(Rom / 10) === 9) {
      result += "XC";
      Rom -= 90;
    } else {
      result += "L";
      Rom = Rom - 50;
    }
  }
  if (Rom >= 10) {
    if (Math.floor(Rom / 10) === 4) {
      result += "XL";
      Rom = Rom - 40;
    } else {
      result += "X".repeat(Rom / 10);
      Rom = Rom % 10;
    }
  }
  if (Rom >= 5) {
    if (Rom === 9) {
      result += "IX";
      Rom -= 9;
    } else {
      result += "V";
      Rom = Rom - 5;
    }
  }
  if (Rom >= 1) {
    if (Rom === 4) {
      result += "IV";
      Rom -= 4;
    } else {
      result += "I".repeat(Rom);
      Rom = 0;
    }
  }

  return result;
};
console.log(intToRoman(3749));

var intToRoman2 = function (num) {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  let i = 0;

  while (num > 0) {
    if (num >= vals[i]) {
      result += syms[i];
      num -= vals[i];
    } else {
      i++;
    }
  }

  return result;
};
console.log(intToRoman2(3749));
