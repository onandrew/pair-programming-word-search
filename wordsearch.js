const wordSearch = (letters, word) => {
  if (word) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposedSearch  = transpose(letters);
    const verticalJoin = transposedSearch.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

const transpose = (letters) => {
  const transposed = []; 
  if (letters.length > 0) {
    for (let x = 0; x < letters[0].length; x++) {
      transposed[x] = []; // creates a new array at transposed[0]
      for (let y = 0; y < letters.length; y++) {
        transposed[x].push(letters[y][x]);
      }
    }
  }
  return transposed;
}

module.exports = wordSearch