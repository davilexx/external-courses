const upperCase = (str) => str.split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');

module.exports = upperCase;
