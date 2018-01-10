module.exports.toTitleCase = (str) => {
  //Capitalize the first character of every word
  return str.replace(/\w\S*/g, (text) => {return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();})
};

module.exports.truncateText = (text, maxChar) => {
  //Truncate texts of over a certain length and add an ellipsis
  if (text.length > 150) {
    const wordBreakIndex = text.substring(150).indexOf(' ');
    if (wordBreakIndex === -1 ) {
      //If truncated text has a whitespace within ten indices of limit, break there and add ellipsis
      return text.substring(0, maxChar) + '...';
    } else {
      return text.substring(0, maxChar + wordBreakIndex) + '...';
    }
  }
  return text;
};
