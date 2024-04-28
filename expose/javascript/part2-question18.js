function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printCurrentTime, 1000); // Print current time every second
