

    const numbers = 
    {
    "1": "Одна",
    "2": "Две",
    "3": "Три",
    "4": "Четыре",
    "5": "Пять",
    "6": "Шесть",
    "7": "Семь",
    "8": "Восемь",
    "9": "Девять",

    "10": "Десять",
    "11": "Одинадцать",
    "12": "Двенадцать",
    "13": "Тринадцать",
    "14": "Четырнадцать",
    "15": "Пятьнадцать",
    "16": "Шестьнадцать",
    "17": "Семьнадцать",
    "18": "Восемьнадцать",
    "19": "Девятьнадцать",
        
    "20":"Двадцать",
    "30":"Тридацть",
    "40":"Сорок",
    "50":"Пятьдесят",
    "60":"Шестьдесят",
    "70":"Семьдесят",
    "80":"Восемьдесят",
    "90":"Девяносто",
    
    "100":"Сто",
    "200":"Двести",
    "300":"Триста",
    "400":"Четыреста",
    "500":"Пятьсот",
    "600":"Шестьсот",
    "700":"Семьсот",
    "800":"Восемьсот",
    "900":"Девятьсот",
    }
    ;

    const hrn = ["Гривна","Гривны","Гривен"];

    let number;

    function getValidNumber() {

    do {
        number = +prompt("Введите число от 1 до 999:");
        if (isNaN(number)) {
            alert("Это не число. Попробуйте снова.");
        } else if (number < 1 || number > 999) {
            alert("Число должно быть в диапазоне от 1 до 999. Попробуйте снова.");
        }
    } while (isNaN(number) || number < 1 || number > 999);

    return number;
    }

    getValidNumber();

    let stringNumber = String(number);

    stringNumber = stringNumber.split("");

    let lastElement = stringNumber[stringNumber.length - 1];
    let lastTwoElements = number % 100;
    let currencyWord;

    if(lastTwoElements >= 11 && lastTwoElements <= 19){
    currencyWord = hrn[2]; 
    }else if(lastElement === "1"){
    currencyWord = hrn[0];
    }else if(lastElement === "2" || lastElement === "3" || lastElement === "4"){
    currencyWord = hrn[1]; 
    }else{
    currencyWord = hrn[2]; 
    } 

    let result = [];

    if(number >= 100){
    let hundreds = Math.floor(number / 100) * 100; 
    result.push(numbers[hundreds]);
    }        

    let tensAndUnits = number % 100;

    if(tensAndUnits <= 19 && tensAndUnits > 0){
    result.push(numbers[tensAndUnits]); 
    }else if(tensAndUnits >= 20){
    let tens = Math.floor(tensAndUnits / 10) * 10;
    let units = tensAndUnits % 10;

    if(tens){
        result.push(numbers[tens]); 
    }
    if(units){
        
        result.push(numbers[units]); 
    }
    }

    result = result.join(" ");
    console.log(`${result}  ${currencyWord}`);



