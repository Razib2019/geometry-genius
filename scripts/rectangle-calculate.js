function calculateRectangleArea() {
  // Get Rectangle Width Value
  const width = getInputValueById("rectangle-width");
  //   console.log(width);

  //    Get Rectangle Length Value
  const length = getInputValueById("rectangle-length");
  //   console.log(length);

  //   Calculate Rectangle Area
  const area = width * length;
  //   console.log("Area Of the Rectangle is: ", area);

  //   Display Rectangle Area
  setInnerTextById("rectangle-area", area);
}
