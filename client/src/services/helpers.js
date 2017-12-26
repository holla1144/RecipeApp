module.exports.toTitleCase = (str) => {
  //Capitalize the first character of every word
  return str.replace(/\w\S*/g, (text) => {return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();})
};
