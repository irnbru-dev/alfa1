function decode(num) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const len = num.charAt(0); //вернуть первый символ из строки

    let arr = [...num.substring(1)].reverse().join('').match(/.{1,2}/g);

    //копируем в arr весь num без первого символа - [ '3', '1', '8', '0', '4', '2', '6', '0' ]
    //переворачиваем - [ '0', '6', '2', '4', '0', '8', '1', '3' ]
    //склеиваем все в одну строку - [ '06240813' ]
    //разделяем на пары по 2 символа - [ '06', '24', '08', '13' ]

    let clr = arr.map(s => s.charAt(0) == 0 ? s.charAt(1) : s);
    //пробегаем по массиву и каждому элемену устраиваем проверку, если первый символ 0 отрезаем его [ '6', '24', '8', '13' ]
    let res = clr.map(s => alphabet.charAt(parseInt(s, 10) - len)).join('');
    //выдергиваем из алфавита 6, 24, 8 и 13 по порядку буквы
    res = res.charAt(0).toUpperCase() + res.slice(1);
    //первую букву сначала отрезаем, делаем большой, потом прицеляем остальное отрезанное слово

    console.log(res) ; //Вуди
}

decode('431804260');


//Метод charAt() возвращает указанный символ из строки.
//Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.