function calculateEllipseArea() {
  // Get Ellipse a Value
  const a = getInputValueById("ellipse-a");
  //   console.log(a);

  // Get Ellipse b Value
  const b = getInputValueById("ellipse-b");
  //   console.log(b);

  //   Calculate Ellipse Area
  const area = 3.1416 * a * b;
  //   console.log("Area Of the Ellipse is: ", area);

  //   Display Ellipse Area
  setInnerTextById("ellipse-area", area);
}
