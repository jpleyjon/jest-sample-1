module.exports = class Dummy {
  static cloneArray(array) {
    return [...array];
  }

  static sum(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static notTested(x) {
    return x;
  }

  static alsoNotTested(x) {
    return x;
  }
}
