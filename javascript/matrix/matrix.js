//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.matrix = input.split('\n').map((row) => row.split(' ').map(Number));
    this.rows = this.matrix;
    this.columns = this.matrix[0].map((_, i) => this.rows.map((row) => row[i]));
  }
}
