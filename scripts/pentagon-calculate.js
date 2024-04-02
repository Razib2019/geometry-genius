function calculatePentagonArea() {
  // Get Pentagon p Value
  const p = getInputValueById("pentagon-p");
  //   console.log(p);

  // Get Pentagon b Value
  const b = getInputValueById("pentagon-b");
  //   console.log(b);

  //   Calculate Pentagon Area
  const area = 0.5 * p * b;
  //   console.log("Area Of the Pentagon is: ", area);

  //   Display Pentagon Area
  setInnerTextById("pentagon-area", area);
}
