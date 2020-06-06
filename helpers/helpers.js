import { FUEL, COUPE, TRANSMISION, COLORS } from './../helpers/constants';

export const dateFormater = (date) => {
    var dateFormat = require('dateformat');
    return dateFormat(date, 'dd.mm.yyyy');
};

export const decodeFuel = (fuel) => {
    if (fuel == 1) {
        return FUEL[0].label;
    } else if (fuel == 2) {
        return FUEL[1].label;
    } else if (fuel == 3) {
        return FUEL[2].label;
    } else if (fuel == 4) {
        return FUEL[3].label;
    } else if (fuel == 5) {
        return FUEL[4].label;
    } else {
        return '-';
    }
};

export const decodeBrand = (brands, id) => {
    const brand = brands.find(item => item.id == id);
    return brand.value;
};

export const decodeModel = (models, id) => {
    const model = models.find(item => item.id == id);
    return model.value;
};

export const decodeCoupe = (coupe) => {
    if (coupe == 1) {
        return COUPE[0].label;
    } else if (coupe == 2) {
        return COUPE[1].label;
    } else if (coupe == 3) {
        return COUPE[2].label;
    } else if (coupe == 4) {
        return COUPE[3].label;
    } else if (coupe == 5) {
        return COUPE[4].label;
    } else if (coupe == 6) {
        return COUPE[5].label;
    } else if (coupe == 7) {
        return COUPE[6].label;
    } else if (coupe == 8) {
        return COUPE[7].label;
    } else {
        return null;
    }
};

export const decodeTransmision = (trans) => {
    if (trans == 1) {
        return TRANSMISION[0].label;
    } else if (trans == 2) {
        return TRANSMISION[1].label;
    } else {
        return null;
    }
};

export const decodeColor = (color) => {
    if (color == 1) {
        return COLORS[0].label;
    } else if (color == 2) {
        return COLORS[1].label;
    } else if (color == 3) {
        return COLORS[2].label;
    } else if (color == 4) {
        return COLORS[3].label;
    } else if (color == 5) {
        return COLORS[4].label;
    } else if (color == 6) {
        return COLORS[5].label;
    } else if (color == 7) {
        return COLORS[6].label;
    } else if (color == 8) {
        return COLORS[7].label;
    } else if (color == 9) {
        return COLORS[8].label;
    } else if (color == 10) {
        return COLORS[9].label;
    } else if (color == 11) {
        return COLORS[10].label;
    } else if (color == 12) {
        return COLORS[11].label;
    } else if (color == 13) {
        return COLORS[12].label;
    } else if (color == 14) {
        return COLORS[13].label;
    } else if (color == 15) {
        return COLORS[14].label;
    } else if (color == 16) {
        return COLORS[15].label;
    } else if (color == 17) {
        return COLORS[16].label;
    } else if (color == 18) {
        return COLORS[17].label;
    } else if (color == 19) {
        return COLORS[18].label;
    } else if (color == 20) {
        return COLORS[19].label;
    } else if (color == 21) {
        return COLORS[20].label;
    } else if (color == 22) {
        return COLORS[21].label;
    } else if (color == 23) {
        return COLORS[22].label;
    } else if (color == 24) {
        return COLORS[23].label;
    } else if (color == 25) {
        return COLORS[24].label;
    } else if (color == 26) {
        return COLORS[25].label;
    } else {
        return null;
    }
};