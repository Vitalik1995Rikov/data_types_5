let date = new Date(2015, 0, 23);

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days)
    return dateCopy.getDate();
}
console.log(getDateAgo(date, 1));