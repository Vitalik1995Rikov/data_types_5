function getSecondsToday() {
    let date = new Date();
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    console.log(seconds);
}
getSecondsToday();