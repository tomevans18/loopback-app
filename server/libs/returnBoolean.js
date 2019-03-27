'use strict';

module.exports = (data) => {
  if (data === undefined || data === null) {
    return false;
  }
  if (parseInt(data)) return true;
  return [true, 'true', 'TRUE'].indexOf(data) > -1;
};
