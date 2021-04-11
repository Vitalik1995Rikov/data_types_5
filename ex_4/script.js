function readNumber() {
    let number;
    do {
        number = prompt('Введи число', 0);
    } while (!isFinite(number));

    if (number == null || number == '') return null;
    
    return number;
    
}

alert(readNumber());