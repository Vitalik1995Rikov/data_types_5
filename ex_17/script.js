let date = new Date(2021, 3, 23); 

function getWeekDay(date) {
    switch (date.getDay()) {
        case 1:
        console.log('ПН');
        break;
        case 2:
        console.log('ВТ');
        break;
        case 3:
        console.log('СР');
        break;
        case 4:
        console.log('ЧТ');
        break;
        case 5:
        console.log('ПЯТ');
        break;
        case 6:
        console.log('СУБ');
        break;
        case 7:
        console.log('ВОС');
        break;
    }
}

getWeekDay(date); 