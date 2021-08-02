const romanMap = {
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000
}

function confirm(){
    var input = document.querySelector('#casa');
    document.getElementById("resultado").innerHTML= parseNumberRoman((input.value));
}

function convertROMA(){
    var input = document.querySelector('#casa1');
    document.getElementById("resultado2").innerHTML= parseRomanNumber((input.value.toUpperCase()));
}

function parseRomanNumber(roman) {
	let sum = 0;
	for (let i = 0; i < roman.length; i++) {
		const current = romanMap[roman[i]];
		const next = romanMap[roman[i + 1]];
		if (next === undefined) {
			sum += current;
			continue;
		}
		if (current >= next) {
			sum += current;
			continue;
		}
		sum -= current;
	}
	return sum;
}


function parseNumberRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }