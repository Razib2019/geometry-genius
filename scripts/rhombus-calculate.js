function calculateRhombusArea() {
  // Get Rhombus d1 Value
  const rhombusd1Input = document.getElementById("rhombus-d1");
  const rhombusd1Text = rhombusd1Input.value;
  const d1 = parseFloat(rhombusd1Text);
  //   console.log(d1);

  // Get Rhombus d2 Value
  const rhombusd2Input = document.getElementById("rhombus-d2");
  const rhombusd2Text = rhombusd2Input.value;
  const d2 = parseFloat(rhombusd2Text);
  //   console.log(d2);

  //   Calculate Rhombus Area
  const area = 0.5 * d1 * d2;
  //   console.log("Area Of the Rhombus is: ", area);

  //   Display Rhombus Area
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  rhombusAreaSpan.innerText = area;
}
