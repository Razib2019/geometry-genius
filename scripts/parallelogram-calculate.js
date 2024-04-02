function calculateParallelogramArea() {
  // Get Parallelogram Base Value
  const base = getInputValueById("parallelogram-base");
  //   console.log(base);

  //   Get Parallelogram Height Value
  const height = getInputValueById("parallelogram-height");
  //   console.log(height);

  //   Calculate Parallelogram Area
  const area = base * height;
  //   console.log("Area Of the Parallelogram is: ", area);

  //   Display Parallelogram Area
  setInnerTextById("parallelogram-area", area);
}
