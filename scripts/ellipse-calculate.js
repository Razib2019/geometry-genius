function calculateEllipseArea() {
  // Get Ellipse a Value
  const ellipseAInput = document.getElementById("ellipse-a");
  const ellipseAText = ellipseAInput.value;
  const a = parseFloat(ellipseAText);
  //   console.log(a);

  // Get Ellipse b Value
  const ellipseBInput = document.getElementById("ellipse-b");
  const ellipseBText = ellipseBInput.value;
  const b = parseFloat(ellipseBText);
  //   console.log(b);

  //   Calculate Ellipse Area
  const area = 3.1416 * a * b;
  //   console.log("Area Of the Ellipse is: ", area);

  //   Display Ellipse Area
  const ellipseAreaSpan = document.getElementById("ellipse-area");
  ellipseAreaSpan.innerText = area;
}
