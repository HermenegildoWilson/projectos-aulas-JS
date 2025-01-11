function parImpar(num1) {

    if (num1 < 0) {
        num1 *= -1
    }

    if (num1 == 0) {
        return `É par!`
    }else if (num1 == 1) {
        return `É impar!`
    }else {
        return parImpar(num1 - 2)
    }
}

console.log(parImpar(-9))