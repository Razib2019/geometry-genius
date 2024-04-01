function calculateParallelogramArea() {
  // Get Parallelogram Base Value
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  //   console.log(base);

  //   Get Parallelogram Height Value
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightText = parallelogramBaseInput.value;
  const height = parseFloat(parallelogramHeightText);
  //   console.log(height);

  //   Calculate Parallelogram Area
  const area = base * height;
  //   console.log("Area Of the Parallelogram is: ", area);

  //   Display Parallelogram Area
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = area;
}
