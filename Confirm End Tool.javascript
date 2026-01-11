function confirmEnding(str, strcheck) {
  return str.slice(-strcheck.length) === strcheck;
}
console.log(confirmEnding("Bastian", "n"));
