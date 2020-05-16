// Write a function that accepts an integer N and returns a NxN sprial matrix.
// Example
// matrix(3)
//  [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]

function matrix(n){
  const results = [];

  for (let i = 0; i < n; i++){
    // Push empty arrays
    results.push([]);
  }
  // Keeps track of what number is being pushed into results array
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow){
    // Top row 
    for (let i = startColumn; i <= endColumn; i++){
      results[startRow][i] = counter;
      counter++;
      console.log("top row", results)
    }
    startRow++;

    // Right column 
    for (let i = startRow; i <= endRow; i++){
      results[i][endColumn] = counter;
      counter++
      console.log("right column", results)
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--){
      results[endRow][i] = counter;
      counter++;
      console.log("bottom row", results)
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--){
      results[i][startColumn] = counter;
      counter++
      console.log("left column", results)
    }
    startColumn++;
  }

  return results;
}

matrix(3);