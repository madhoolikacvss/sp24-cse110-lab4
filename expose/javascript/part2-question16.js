for (let items in statistics) {
    if (items[0] === 'r' || statistics[items] % 2 !== 0) {
        console.log(statistics[items]);
    }
}