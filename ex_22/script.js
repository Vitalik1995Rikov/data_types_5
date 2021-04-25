function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = 24 * 3600;
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    let secondsToTomorrow = tomorrow - seconds;
    console.log(secondsToTomorrow);
}
getSecondsToTomorrow();