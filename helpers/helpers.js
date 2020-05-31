export const dateFormater = (date) => {
    var dateFormat = require('dateformat');
    return dateFormat(date, 'dd.mm.yyyy');
}

export const decodeFuel = (fuel) => {
    if (fuel === 1) {
        return 'Diesel';
    } else if (fuel === 2) {
        return 'Benzín';
    } else if (fuel === 3) {
        return 'Benzín + LPG';
    } else if (fuel === 4) {
        return 'Hybrid';
    } else if (fuel === 5) {
        return 'Elektro';
    } else {
        return '-';
    }
}