/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    let total = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            total = total + V - I
            i++
        } else if (s[i] === "I" && s[i + 1] === "X") {
            total = total + X - I
            i++
        } else if (s[i] === "X" && s[i + 1] === "L") {
            total = total + L - X
            i++
        } else if (s[i] === "X" && s[i + 1] === "C") {
            total = total + C - X
            i++
        }
        else if (s[i] === "C" && s[i + 1] === "D") {
            total = total + D - C
            i++
        }
        else if (s[i] === "C" && s[i + 1] === "M") {
            total = total + M - C
            i++
        }
        else if (s[i] === "I") {
            total = total + I
        }
        else if (s[i] === "V") {
            total = total + V
        }
        else if (s[i] === "X") {
            total = total + X
        }
        else if (s[i] === "L") {
            total = total + L
        }
        else if (s[i] === "C") {
            total = total + C
        }
        else if (s[i] === "D") {
            total = total + D
        }
        else if (s[i] === "M") {
            total = total + M
        }


    }

    return total

};




console.log(romanToInt("IV"))
console.log(romanToInt("XXVII"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))