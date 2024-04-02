function calculateRhombusArea() {
  // Get Rhombus d1 Value
  const d1 = getInputValueById("rhombus-d1");
  //   console.log(d1);

  // Get Rhombus d2 Value
  const d2 = getInputValueById("rhombus-d2");
  //   console.log(d2);

  //   Calculate Rhombus Area
  const area = 0.5 * d1 * d2;
  //   console.log("Area Of the Rhombus is: ", area);

  //   Display Rhombus Area
  setInnerTextById("rhombus-area", area);
}
