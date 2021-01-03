import {
  FUEL,
  COUPE,
  TRANSMISION,
  COLORS,
  CATEGORY,
  SORTED,
} from './../helpers/constants';
import moment from 'moment';

export const dateFormater = (date) => {
  var dateFormat = require('dateformat');
  return dateFormat(date, 'dd.mm.yyyy');
};

export const getDateFromTimestamp = (timestamp) => {
  var time = moment.unix(timestamp).format('DD.MM.YYYY');
  return time;
};

export const getDateAndTimeFromTimestamp = (timestamp) => {
  var time = moment.unix(timestamp).format('DD.MM.YYYY, H:m:s');
  return time;
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

export const decodeCategory = (category) => {
  if (category == 1) {
    return CATEGORY[0].label;
  } else if (category == 2) {
    return CATEGORY[1].label;
  } else if (category == 3) {
    return CATEGORY[2].label;
  } else if (category == 4) {
    return CATEGORY[3].label;
  } else if (category == 5) {
    return CATEGORY[4].label;
  } else if (category == 6) {
    return CATEGORY[5].label;
  } else if (category == 7) {
    return CATEGORY[6].label;
  } else if (category == 8) {
    return CATEGORY[7].label;
  } else if (category == 16) {
    return CATEGORY[8].label;
  } else if (category == 9) {
    return CATEGORY[9].label;
  } else if (category == 10) {
    return CATEGORY[10].label;
  } else if (category == 11) {
    return CATEGORY[11].label;
  } else if (category == 12) {
    return CATEGORY[12].label;
  } else if (category == 13) {
    return CATEGORY[13].label;
  } else if (category == 14) {
    return CATEGORY[14].label;
  } else {
    return null;
  }
};

export const decodeBrand = (brands, id) => {
  const brand = brands.find((item) => item.value == id);
  if (brand) {
    return brand.label;
  }
  return null;
};

export const decodeModel = (models, id) => {
  const model = models.find((item) => item.value == id);
  if (model) {
    return model.label;
  }

  return null;
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

export const decodeSorted = (sort) => {
  if (sort == 'year_of_manufacture') {
    return SORTED[0].label;
  } else if (sort == 'price') {
    return SORTED[1].label;
  } else if (sort == 'power') {
    return SORTED[2].label;
  } else if (sort == 'mileage') {
    return SORTED[3].label;
  } else if (sort == 'fuel') {
    return SORTED[4].label;
  } else return null;
};

export const getYearsList = (min, max) => {
  let years = [];
  for (let i = max; i >= min; i--) {
    years.push({ value: i, label: i });
  }

  return years;
};

export const getAdTitle = (title, brand, model) => {
  return title ? title : brand + ' ' + model;
};

export const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: 'smooth' });

export const getFilterQueryUrl = (filter, baseUrl) => {
  let url = baseUrl + '/filter?';
  let queryObject = {};

  Object.entries(filter).forEach(([key, val]) => {
    if (val !== undefined) {
      queryObject[key] = val;

      if (key === 'category') {
        url += `${key}=${val}`;
      } else {
        url += `&${key}=${val}`;
      }
    }
  });

  return [queryObject, url];
};
