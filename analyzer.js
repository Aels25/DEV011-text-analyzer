const analyzer = {
  getWordCount: function(text) {
    const words = text.split(/\s+/).filter(word => word !== "");
    return words.length;
  },
  getCharacterCount: function(text) {
    return text.length;
  },
  getCharacterCountExcludingSpaces: function(text) {
    const characters = text.replace(/[^\w]/g, "");
    return characters.length;
  },
  getNumberCount: function(text) {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    return numbers ? numbers.length : 0;
  },

  getNumberSum: function(text) {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers) {
      let sum = 0; 
      for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]); 
      }
      return sum;
    }
    return 0;
  },
  
  getAverageWordLength: function(text) {
    const words = text.split(/\s+/).filter(word => word !== "");
    if (words.length === 0) {
      return 0;
    }
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = totalWordLength / words.length;
    return parseFloat(averageLength.toFixed(2));
  }
};

export default analyzer;