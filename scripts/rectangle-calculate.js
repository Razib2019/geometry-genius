function calculateRectangleArea() {
  // Get Rectangle Width Value
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);

  //    Get Rectangle Length Value
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  //

  //   Calculate Triangle Area
  const area = width * length;
  console.log("Area Of the Rectangle is: ", area);

  //   Display Triangle Area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
