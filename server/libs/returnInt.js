'use strict';

exports.module = (data) => {
  if (typeof data === 'string') {
    return parseInt(data);
  }
  return data;
};
