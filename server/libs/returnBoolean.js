'use strict';

exports.module = (data) => {
  if (data === undefined || data === null) {
    return false;
  }
  return [true, 'true', 'TRUE'].indexOf(data) > -1;
};
