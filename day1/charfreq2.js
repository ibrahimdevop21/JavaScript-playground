class Histogram {
  constructor() {
    this.letterCounts = new Map();
    this.totalLetters = 0;
  }

  add(text) {
    text = text.replace(/\s/g, '').toUpperCase();
    for (let character of text) {
      let count = this.letterCounts.get(character) || 0;
      this.letterCounts.set(character, count + 1);
      this.totalLetters++;
    }
  }

  toString() {
    let entries = [...this.letterCounts];
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });
    entries = entries.filter(
      (entry) => (entry[1] / this.totalLetters) * 100 >= 1
    );
    let lines = entries.map(
      ([l, n]) =>
        `${l}: ${'#'.repeat(Math.round((n / this.totalLetters) * 100))} ${(
          (n / this.totalLetters) *
          100
        ).toFixed(2)}%`
    );
    return lines.join('\n');
  }
}

// Example usage
const histogram = new Histogram();
histogram.add('Hello, World!');
histogram.add('This is a sample text for the histogram.');
console.log(histogram.toString());
