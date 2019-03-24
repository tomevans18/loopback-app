'use strict';

module.exports = data => typeof data === 'string' ? parseInt(data.replace(/,/g, '')) : data;
