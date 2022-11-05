function uniquePaths(m, n) {
  let matrix = [];

  // Add number of correct rows
  for (let row = 0; row < n; row++) {
    matrix.push([]);
  }

  // Fill first row with 1s
  for (let row = 0; row < n; row++) {
    matrix[row][0] = 1;
  }

  // Fill first column with 1s
  for (let col = 0; col < m; col++) {
    matrix[0][col] = 1;
  }

  // Fill all matrix with the correct unique path
  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      matrix[row][col] = matrix[row][col - 1] + matrix[row - 1][col];
    }
  }

  // Return last item in the 2D matrix
  return matrix[matrix.length - 1][m - 1];
}

module.exports = uniquePaths;
