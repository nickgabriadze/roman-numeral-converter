function convertToRoman(num) {
  const dict = {
    1000: "M",
    900: "CM",
    800: "DCCC",
    700: "DCC",
    600: "DC",
    500: "D",
    400: "CD",
    300: "CCC",
    200: "CC",
    100: "C",
    90: "XC",
    80: "LXXX",
    70: "LXX",
    60: "LX",
    50: "L",
    40: "XL",
    30: "XXX",
    20: "XX",
    10: "X",
    9: "IX",
    8: "VIII",
    7: "VII",
    6: "VI",
    5: "V",
    4: "IV",
    3: "III",
    2: "II",
    1: "I"
  }

  let digits = num.toString();
  digits = digits.split("");
  let string = ""

  if(num >= 1000){
    for(let i = 0; i < parseInt(num/1000);i ++){
      string += "M"
    }
    num = num % 1000;
  }

  let nextPart = 0;
  if(num >= 100){
  for(let i = 100; i < 1000; i += 100){
    if(num >= i){
      nextPart = i
    }
  }

    string += dict[nextPart]
    num = num % nextPart
  }

  if(num >= 10){
    for(let i = 10; i < 100; i+= 10){
      if(num >= i){
        nextPart = i
      }
    }

    string += dict[nextPart]
    num = num % nextPart;
  }
  if(num >= 1){
    for(let i = 1; i < 10; i++){
      if(num >= i){
        nextPart = i
      }
    }

    string += dict[nextPart]
  }



  return string;
}
